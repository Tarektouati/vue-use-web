import { ref, onMounted, Ref } from '@vue/composition-api';

export function useFetch(url: RequestInfo, options: RequestInit) {
  const response: Ref<any> = ref(null);
  const isLoading = ref(false);
  const success = ref(false);
  const error = ref(false);
  const cancelled = ref(false);
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
        const isContentTypeJson =
          res.headers.get('content-type')?.slice(0, res.headers.get('content-type')?.indexOf(';')) ===
          'application/json';

        if (isContentTypeJson) {
          return res.json();
        }

        return res.text();
      })
      .then(responseValue => {
        // Graceful degradation for cancellation.
        if (cancelled.value) {
          return;
        }

        response.value = responseValue;
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
    response,
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
