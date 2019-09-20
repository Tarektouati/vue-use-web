import { ref, onMounted, onUnmounted } from '@vue/composition-api';

export function useClipboard() {
  const text = ref('');

  async function onCopy() {
    text.value = await navigator.clipboard.readText();
  }

  onMounted(() => {
    window.addEventListener('copy', onCopy);
  });

  onUnmounted(() => {
    window.removeEventListener('copy', onCopy);
  });

  function write(txt: string) {
    text.value = txt;

    return navigator.clipboard.writeText(txt);
  }

  return {
    text,
    write
  };
}
