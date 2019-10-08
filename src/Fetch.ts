import { reactive, toRefs, onMounted } from '@vue/composition-api';

export function useFetch(url: RequestInfo, options: RequestInit) {
  const stateDefs: {
    blob: Blob | null;
    json: any;
    text: string;
    isLoading: boolean;
    success: boolean;
    error: boolean;
    cancelled: boolean;
  } = {
    isLoading: false,
    success: false,
    error: false,
    cancelled: false,
    json: null,
    blob: null,
    text: ''
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
