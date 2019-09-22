import { onMounted, ref } from '@vue/composition-api';

export function useUserMedia(constraints: MediaStreamConstraints) {
  const error = ref('');

  const promise: Promise<MediaStream> = new Promise((resolve, reject) => {
    onMounted(() => {
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(resolve)
        .catch(err => {
          if (err.name === 'ConstraintNotSatisfiedError') {
            error.value = 'constrains not satisfied';
            return;
          }

          if (err.name === 'PermissionDeniedError') {
            error.value = 'user denied permission';
            return;
          }

          error.value = `${err.name}: ${err.message}`;
          reject(err);
        });
    });
  });

  return {
    error,
    toPromise: () => promise
  };
}
