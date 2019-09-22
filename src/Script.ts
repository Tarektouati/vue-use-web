import { onMounted, reactive, toRefs } from '@vue/composition-api';

interface ScriptOptions {
  src: string;
  // async?: boolean;
  // defer?: boolean;
  // module?: boolean;
}

export function useScript(opts: ScriptOptions) {
  const state = reactive({
    isLoading: false,
    error: false,
    success: false
  });

  const promise = new Promise((resolve, reject) => {
    onMounted(() => {
      const script = document.createElement('script');
      // script.async = opts.async || true;
      // script.async = opts.defer || true;
      // script.noModule = !opts.module || false;
      script.onload = function() {
        state.isLoading = false;
        state.success = true;
        state.error = false;
        resolve();
      };

      script.onerror = function(err) {
        state.isLoading = false;
        state.success = false;
        state.error = true;
        reject(err);
      };

      script.src = opts.src;
      document.head.appendChild(script);
    });
  });

  return {
    ...toRefs(state),
    toPromise: () => promise
  };
}
