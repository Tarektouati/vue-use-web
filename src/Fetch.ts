import { reactive, toRefs, onMounted } from '@vue/composition-api';

export function useFetch(url: RequestInfo, options: RequestInit) {
  const stateDefs: {
    blob: Blob | null;
    json: any;
    text: string;
    statusText: string;
    status: number | undefined;
    isLoading: boolean;
    headers: Record<string, string>;
    success: boolean;
    type: ResponseType | 'unknown';
    error: boolean;
    cancelled: boolean;
  } = {
    isLoading: false,
    success: false,
    error: false,
    cancelled: false,
    json: null,
    blob: null,
    text: '',
    type: 'unknown',
    status: undefined,
    statusText: '',
    headers: {}
  };

  const state = reactive(stateDefs);

  let signal: AbortSignal | undefined;
  let controller: AbortController;
  if (typeof AbortController !== 'undefined') {
    controller = new AbortController();
    signal = controller.signal;
  }

  function execute() {
    state.isLoading = true;

    return window
      .fetch(url, { signal, ...options })
      .then(res => {
        state.success = res.ok;
        state.error = !res.ok;
        state.isLoading = false;
        state.statusText = res.statusText;
        state.status = res.status;
        state.type = res.type;
        const headers: Record<string, string> = {};
        res.headers.forEach((value, key) => {
          headers[key] = value;
        });

        state.headers = headers;

        return Promise.all([res.clone().text(), res.clone().blob(), res.json()]);
      })
      .then(([text, blob, json]) => {
        // Graceful degradation for cancellation.
        if (state.cancelled) {
          return;
        }

        state.text = text;
        state.blob = blob;
        state.json = json;
      })
      .catch(() => {
        state.error = true;
        state.isLoading = false;
      });
  }

  onMounted(execute);

  function cancel() {
    if (state.success) {
      return;
    }

    state.cancelled = true;
    if (controller) {
      controller.abort();
    }
  }

  return {
    ...toRefs(state),
    cancel,
    execute
  };
}
