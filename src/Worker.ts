import { ref, onMounted, onUnmounted, Ref } from '@vue/composition-api';

export function useWorker(url: string) {
  const data: Ref<any> = ref(null);
  let worker: Worker;

  const post: typeof worker.postMessage = function post(val: any) {
    if (!worker) return;

    worker.postMessage(val);
  };

  const terminate: typeof worker.terminate = function terminate() {
    if (!worker) return;

    worker.terminate();
  };

  onMounted(() => {
    worker = new Worker(url);

    worker.onmessage = (e: MessageEvent) => {
      data.value = e.data;
    };
  });

  onUnmounted(() => {
    worker.terminate();
  });

  return {
    data,
    post,
    terminate
  };
}
