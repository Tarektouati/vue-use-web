import { reactive, toRefs, onMounted } from '@vue/composition-api';

export function useFetch(url: RequestInfo, options: RequestInit) {
  const state = reactive({
    isLoading: false,
    success: false,
    error: false,
    response: null
  });

  onMounted(() => {
    window
      .fetch(url, options)
      .then(res => {
        state.success = res.ok;
        state.error = !res.ok;
        state.isLoading = false;

        return res.json();
      })
      .then(json => {
        state.response = json;
      });
  });

  return {
    ...toRefs(state)
  };
}
