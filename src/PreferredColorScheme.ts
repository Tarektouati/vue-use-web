import { ref, onMounted, onUnmounted } from '@vue/composition-api';

export function usePreferredColorScheme() {
  const themesObj: Record<string, MediaQueryList> = {
    light: window.matchMedia('(prefers-color-scheme: light)'),
    dark: window.matchMedia('(prefers-color-scheme: dark)'),
    'no-preference': window.matchMedia('(prefers-color-scheme: no-preference)')
  };

  const value = ref(getTheme());

  function getTheme() {
    let theme = null;
    for (const key in themesObj) {
      if (themesObj[key].matches) {
        theme = key;
        break;
      }
    }

    return theme;
  }

  function handler() {
    value.value = getTheme();
  }

  onMounted(() => {
    Object.values(themesObj).forEach(theme => {
      theme.addListener(handler);
    });
  });

  onUnmounted(() => {
    Object.values(themesObj).forEach(themeMedia => {
      themeMedia.removeListener(handler);
    });
  });

  return value;
}
