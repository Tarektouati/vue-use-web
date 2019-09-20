import { onMounted, Ref, reactive, toRefs, onUnmounted } from '@vue/composition-api';

export function useIntersectionObserver(
  target: Ref<HTMLElement>,
  options: IntersectionObserverInit = { root: null, rootMargin: '0px' }
) {
  const state = reactive({
    intersectionRatio: 0,
    isIntersecting: false,
    isFullyInView: false
  });

  function observe() {
    if (target.value) {
      observer.observe(target.value);
    }
  }

  let observer: IntersectionObserver;
  onMounted(() => {
    observer = new IntersectionObserver(([entry]) => {
      state.intersectionRatio = state.intersectionRatio;
      if (entry.intersectionRatio > 0) {
        state.isIntersecting = true;
        state.isFullyInView = entry.intersectionRatio === 1;
        return;
      }

      state.isIntersecting = false;
    }, options);

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
