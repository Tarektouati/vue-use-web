import { onMounted, Ref, reactive, toRefs, onUnmounted } from '@vue/composition-api';

export function useResizeObserver(target: Ref<HTMLElement>, options?: ResizeObserverObserve) {
  const state = reactive({
    origin: {
      x: 0,
      y: 0
    },

    size: {
      width: 0,
      height: 0
    },

    rect: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });

  function observe() {
    if (target.value) {
      observer.observe(target.value, options);
    }
  }

  let observer: ResizeObserver;

  onMounted(() => {
    observer = new ResizeObserver(([entry]) => {
      const rect = entry.contentRect;

      state.origin.x = rect.x;
      state.origin.y = rect.y;

      state.size.width = rect.width;
      state.size.height = rect.height;

      state.rect.top = rect.top;
      state.rect.right = rect.right;
      state.rect.bottom = rect.bottom;
      state.rect.left = rect.left;
    });

    observe();
  });

  function unobserve() {
    if (!observer) return;

    if (target.value) {
      observer.unobserve(target.value);
    }
  }

  onUnmounted(unobserve);

  return {
    ...toRefs(state),
    observe,
    unobserve
  };
}

// Resize observer types
// Typescript doesn't include these yet
declare global {
  interface Window {
    ResizeObserver: ResizeObserver;
  }

  /**
   * The ResizeObserver interface is used to observe changes to Element's content
   * rect.
   */
  interface ResizeObserver {
    /**
     * Adds target to the list of observed elements.
     */
    observe: (target: Element, options?: ResizeObserverObserve) => void;

    /**
     * Removes target from the list of observed elements.
     */
    unobserve: (target: Element) => void;

    /**
     * Clears both the observationTargets and activeTargets lists.
     */
    disconnect: () => void;
  }

  // declare var … doesn't work here
  const ResizeObserver: {
    prototype: ResizeObserver;
    new (callback: ResizeObserverCallback): ResizeObserver;
  };

  /**
   * This callback delivers ResizeObserver's notifications. It is invoked by a
   * broadcast active observations algorithm.
   */
  interface ResizeObserverCallback {
    (entries: ResizeObserverEntry[], observer: ResizeObserver): void;
  }

  interface ResizeObserverEntry {
    /**
     * The Element whose size has changed.
     */
    readonly target: Element;

    /**
     * Element's content rect when ResizeObserverCallback is invoked.
     */
    readonly contentRect: DOMRectReadOnly;
  }

  // declare var … doesn't work here
  const ResizeObserverEntry: {
    prototype: ResizeObserverEntry;
    new (target: Element): ResizeObserverEntry;
  };

  interface ResizeObserverObserve {
    /**
     * The box model to observe on the element
     */
    readonly box: 'content-box' | 'border-box';
  }
}
