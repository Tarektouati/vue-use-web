import { onMounted, reactive, toRefs } from '@vue/composition-api';

export function useUserMedia(constraints: MediaStreamConstraints) {
  const dataDefs: { error: Error | null; promise: Promise<MediaStream> | null } = {
    error: null,
    promise: null
  };

  const state = reactive(dataDefs);
  state.promise = new Promise((resolve, reject) => {
    onMounted(() => {
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(resolve)
        .catch(err => {
          state.error = err;
          reject(err);
        });
    });
  });

  return {
    ...toRefs(state)
  };
}
