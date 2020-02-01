import { onMounted, Ref, ref, onUnmounted } from 'vue';

export function useIntersectionObserver(
  target: Ref<HTMLElement | null>,
  options: IntersectionObserverInit = { root: null, rootMargin: '0px' }
) {
  const intersectionRatio = ref(0);
  const isIntersecting = ref(false);
  const isFullyInView = ref(false);

  function observe() {
    if (target.value) {
      observer.observe(target.value as HTMLElement);
    }
  }

  let observer: IntersectionObserver;
  onMounted(() => {
    observer = new IntersectionObserver(([entry]) => {
      intersectionRatio.value = entry.intersectionRatio;
      if (entry.intersectionRatio > 0) {
        isIntersecting.value = true;
        isFullyInView.value = entry.intersectionRatio >= 1;
        return;
      }

      isIntersecting.value = false;
    }, options);

    observe();
  });

  function unobserve() {
    if (!observer) return;

    if (target.value) {
      observer.unobserve(target.value as HTMLElement);
    }
  }

  onUnmounted(unobserve);

  return {
    intersectionRatio,
    isIntersecting,
    isFullyInView,
    observe,
    unobserve
  };
}
