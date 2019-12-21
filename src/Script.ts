import { onMounted, ref } from '@vue/composition-api';

interface ScriptOptions {
  src: string;
  // async?: boolean;
  // defer?: boolean;
  // module?: boolean;
}

export function useScript(opts: ScriptOptions) {
  const isLoading = ref(false);
  const error = ref(false);
  const success = ref(false);

  const promise = new Promise((resolve, reject) => {
    onMounted(() => {
      const script = document.createElement('script');
      // script.async = opts.async || true;
      // script.async = opts.defer || true;
      // script.noModule = !opts.module || false;
      script.onload = function() {
        isLoading.value = false;
        success.value = true;
        error.value = false;
        resolve();
      };

      script.onerror = function(err) {
        isLoading.value = false;
        success.value = false;
        error.value = true;
        reject(err);
      };

      script.src = opts.src;
      document.head.appendChild(script);
    });
  });

  return {
    isLoading,
    error,
    success,
    toPromise: () => promise
  };
}
