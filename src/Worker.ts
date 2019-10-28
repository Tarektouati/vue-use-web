import { ref, onMounted, onUnmounted, Ref } from '@vue/composition-api';

export function useWorker(url: string) {
  let ww: Worker;
  const terminate: typeof ww.terminate = function terminate() {
    if (!ww) return;

    ww.terminate();
  };

  const post: typeof ww.postMessage = function post(val: any) {
    if (!ww) return;

    ww.postMessage(val);
  };

  const message: typeof ww.onmessage = function message(val: any) {
    if (!ww) return;

    ww.postMessage(val);
  };

  onMounted(() => {
    ww = new Worker(url);

    ww.onmessage = (e: MessageEvent) => {
      postMessage(e.data, origin);
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
