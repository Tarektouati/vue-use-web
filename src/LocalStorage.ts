import { ref, onMounted, onUnmounted, Ref } from '@vue/composition-api';

function parseValue(serializedVal: string) {
  let value = null;
  try {
    value = JSON.parse(serializedVal);
  } catch {
    value = serializedVal;
  }

  return value;
}

export function useLocalStorage(key: string, def: any = null) {
  const value: Ref<any> = ref(null);
  const init = () => {
    const serializedVal = localStorage.getItem(key);
    if (serializedVal !== null) {
      value.value = parseValue(serializedVal);
      return;
    }

    value.value = def;
  };

  if (typeof window !== 'undefined') {
    init();
  } else {
    onMounted(init);
  }

  onUnmounted(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value.value));
    }
  });

  window.addEventListener('storage', function(e) {
    if (e.key === key) {
      value.value = e.newValue ? parseValue(e.newValue) : null;
    }
  });

  return {
    value
  };
}
