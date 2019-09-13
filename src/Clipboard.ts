import { reactive, toRefs, onMounted } from '@vue/composition-api';

function copy(text: string) {
  STATE.text = text;

  return navigator.clipboard.writeText(text);
}

let STATE: ReturnType<typeof initState>;

function initState() {
  return reactive({
    text: ''
  });
}

export function useClipboard() {
  if (!STATE) {
    STATE = initState();
  }

  onMounted(() => {
    window.addEventListener('copy', async () => {
      STATE.text = await navigator.clipboard.readText();
    });
  });

  return {
    ...toRefs(STATE),
    copy
  };
}
