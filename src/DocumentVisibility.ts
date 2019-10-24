import { ref, Ref } from '@vue/composition-api';
import { hasWindow, useDocumentEventListener } from './utils';

/**
 * Tracks visibility of the page.
 *
 * @returns True if the document is currently visible.
 *
 * @example
 * setup() {
 *  const isVisible = useDocumentVisibility()
 *  watch(() => console.log(isVisible))
 * }
 *
 */
export function useDocumentVisibility(): Ref<boolean> {
  const documentIsVisible = () => document.visibilityState === 'visible';

  const isVisible: Ref<boolean> = ref(hasWindow ? documentIsVisible() : true);

  useDocumentEventListener('visibilitychange', () => {
    isVisible.value = documentIsVisible();
  });

  return isVisible;
}
