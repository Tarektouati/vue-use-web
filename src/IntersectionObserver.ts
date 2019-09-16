import { onMounted, Ref, reactive, toRefs, onUnmounted } from '@vue/composition-api';

export function useIntersectionObserver(
  target: Ref<HTMLElement>,
  options: IntersectionObserverInit = { root: null, rootMargin: '0px' }
) {
  const state = reactive({
    intersectionRatio: 0,
    isIntersecting: false
  });

  let observer: IntersectionObserver;
  onMounted(() => {
    observer = new IntersectionObserver(([entry]) => {
      state.intersectionRatio = state.intersectionRatio;
      if (entry.intersectionRatio > 0) {
        state.isIntersecting = true;
        return;
      }

      state.isIntersecting = false;
    }, options);

    if (target.value) {
      observer.observe(target.value);
    }
  });

  onUnmounted(() => {
    if (!observer) return;

    if (target.value) {
      observer.unobserve(target.value);
    }
  });

  return {
    ...toRefs(state)
  };
}
