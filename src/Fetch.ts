import { ref, onMounted, Ref } from '@vue/composition-api';

export function useFetch(url: RequestInfo, options: RequestInit) {
  const blob: Ref<Blob | null> = ref(null);
  const json: Ref<any> = ref(null);
  const isLoading = ref(false);
  const success = ref(false);
  const error = ref(false);
  const cancelled = ref(false);
  const text = ref('');
  const type: Ref<ResponseType | 'unknown'> = ref('unknown');
  const status: Ref<number | undefined> = ref(undefined);
  const statusText = ref('');
  const headers: Ref<Record<string, string>> = ref({});

  let signal: AbortSignal | undefined;
  let controller: AbortController;
  if (typeof AbortController !== 'undefined') {
    controller = new AbortController();
    signal = controller.signal;
  }

  function execute() {
    isLoading.value = true;

    return window
      .fetch(url, { signal, ...options })
      .then(res => {
        success.value = res.ok;
        error.value = !res.ok;
        isLoading.value = false;
        statusText.value = res.statusText;
        status.value = res.status;
        type.value = res.type;
        const responseHeaders: Record<string, string> = {};
        res.headers.forEach((value, key) => {
          responseHeaders[key] = value;
        });

        headers.value = responseHeaders;

        return Promise.all([res.clone().text(), res.clone().blob(), res.json()]);
      })
      .then(([text, blob, json]) => {
        // Graceful degradation for cancellation.
        if (cancelled.value) {
          return;
        }

        text.value = text;
        blob.value = blob;
        json.value = json;
      })
      .catch(() => {
        error.value = true;
        isLoading.value = false;
      });
  }

  onMounted(execute);

  function cancel() {
    if (success.value) {
      return;
    }

    cancelled.value = true;
    if (controller) {
      controller.abort();
    }
  }

  return {
    blob,
    json,
    text,
    status,
    statusText,
    headers,
    isLoading,
    cancelled,
    error,
    success,
    cancel,
    execute
  };
}
