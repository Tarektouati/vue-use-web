import { ref, Ref } from '@vue/composition-api';
import { hasWindow, useDocumentEventListener } from './utils';

/**
 * Tracks visibility of the page.
 *
 * @returns True if the document is currently visible.
 *
 * @example
 * setup() {
 *  const isCurrentlyVisible = useDocumentVisibility()
 *  watch(() => console.log(isCurrentlyVisible))
 * }
 *
 */
export function useDocumentVisibility(): Ref<boolean> {
  const isVisible = () => document.visibilityState === 'visible';

  const isCurrentlyVisible: Ref<boolean> = ref(hasWindow ? isVisible() : true);

  useDocumentEventListener('visibilitychange', () => {
    isCurrentlyVisible.value = isVisible();
  });

  return isCurrentlyVisible;
}
