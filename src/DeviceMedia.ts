import { onMounted, ref, Ref } from '@vue/composition-api';

export function useDeviceMedia(constraints: MediaStreamConstraints) {
  const streamRef: Ref<MediaStream | null> = ref(null);
  const errorRef: Ref<Error | null> = ref(null);

  onMounted(() => {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((recivedStream: MediaStream) => (streamRef.value = recivedStream))
      .catch(err => (errorRef.value = err));
  });

  return {
    stream: streamRef,
    error: errorRef
  };
}
