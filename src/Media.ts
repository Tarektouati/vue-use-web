import { ref, onMounted, onUnmounted } from 'vue';

export function useMedia(query: string) {
  let mediaQuery!: MediaQueryList;

  // try to fetch initial value (avoid SSR issues)
  if (typeof window !== 'undefined') {
    mediaQuery = window.matchMedia(query);
  }

  const matches = ref(mediaQuery ? mediaQuery.matches : false);
  function handler(event: MediaQueryListEvent) {
    matches.value = event.matches;
  }

  onMounted(() => {
    if (!mediaQuery) {
      mediaQuery = window.matchMedia(query);
    }

    matches.value = mediaQuery.matches;
    mediaQuery.addListener(handler);
  });

  onUnmounted(() => {
    mediaQuery.removeListener(handler);
  });

  return matches;
}
