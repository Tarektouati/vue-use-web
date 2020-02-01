import { Ref, ref } from 'vue';

export function useFullscreen(target: Ref<HTMLElement>) {
  const isFullscreen = ref(false);
  function exitFullscreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }

    isFullscreen.value = false;
  }

  function enterFullscreen() {
    exitFullscreen();

    target.value.requestFullscreen().then(() => {
      isFullscreen.value = true;
    });
  }

  return {
    isFullscreen,
    enterFullscreen,
    exitFullscreen
  };
}
