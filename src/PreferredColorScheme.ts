import { computed, Ref } from '@vue/composition-api';
import { useMedia } from './Media';

export function usePreferredColorScheme(): Ref<'dark' | 'light' | 'no-preference'> {
  const queries = {
    light: '(prefers-color-scheme: light)',
    dark: '(prefers-color-scheme: dark)',
    'no-preference': '(prefers-color-scheme: no-preference)'
  };

  const isDark = useMedia(queries.dark);
  const isLight = useMedia(queries.light);

  const theme = computed(() => {
    if (isDark.value) {
      return 'dark';
    }

    if (isLight.value) {
      return 'light';
    }

    return 'no-preference';
  });

  return theme;
}
