import { onMounted, Ref, ref, onUnmounted } from '@vue/composition-api';

type NotificationOptions = {
  dir?: 'auto' | 'ltr' | 'rtl';
  lang?: string;
  body?: string;
  tag?: string;
  icon?: string;
};

type NotificationMethods = {
  onClick: ((e: Event) => void) | null;
  onShow: ((e: Event) => void) | null;
  onError: ((e: Event) => void) | null;
  onClose: ((e: Event) => void) | null;
};

const defaultNotificationOptions = {
  onClick: null,
  onShow: null,
  onError: null,
  onClose: null
};

export function useNotification(
  title: string,
  options: NotificationOptions = {},
  methods: NotificationMethods = defaultNotificationOptions
) {
  const notification: Ref<Notification | null> = ref(null);
  const requestPermission = async () => {
    if ('permission' in Notification && Notification.permission !== 'denied') {
      await Notification.requestPermission();
    }
  };

  onMounted(requestPermission);

  onUnmounted(() => {
    notification.value = null;
  });

  const showNotifcation = (): void => {
    notification.value = new Notification(title, options);
    notification.value.onclick = methods.onClick;
    notification.value.onshow = methods.onShow;
    notification.value.onerror = methods.onError;
    notification.value.onclose = methods.onClose;
  };

  return { showNotifcation };
}
