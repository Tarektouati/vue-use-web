import { ref, onMounted, onUnmounted, Ref } from '@vue/composition-api';

export function useWorker(url: string) {
  let message: Ref<any> = ref(null); 
  let ww: Worker;
  
  const post: typeof ww.postMessage = function post(val: any) {
    if (!ww) return;

    ww.postMessage(val);
  };

  const terminate: typeof ww.terminate = function terminate() {
    if (!ww) return;

    ww.terminate();
  };

  onMounted(() => {
    ww = new Worker(url);

    ww.onmessage = (e: MessageEvent) => {
      message.value = e.data;
      ww.postMessage(message);
    };
  });

  onUnmounted(() => {
    ww.terminate();
  });

  return {
    message,
    post,
    terminate
  };
}
