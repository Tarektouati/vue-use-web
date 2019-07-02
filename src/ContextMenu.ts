import Vue, { VueConstructor } from 'vue';
import { normalizeSlot, normalizeChildren } from './utils';

type withCloseListener = VueConstructor<
  Vue & {
    _onCloseHandler: EventListenerOrEventListenerObject;
  }
>;

let ACTIVE_MENU: any;

export const ContextMenu = (Vue as withCloseListener).extend({
  props: {
    tag: {
      type: String,
      default: 'span'
    },
    selector: {
      type: String,
      default: null
    }
  },
  render(h) {
    let menu = normalizeSlot(this, 'menu', {});
    const children = normalizeChildren(this, {});
    const style = {
      width: 'auto',
      position: 'absolute',
      display: 'none',
      left: '0px',
      top: '0px'
    };

    const menuRoot = menu.length > 1 ? menu[0] : h('span', menu);
    if (!menuRoot.data) {
      menuRoot.data = {};
    }

    // For SSR.
    if (typeof window === 'undefined') {
      return h(this.tag, [...children, menu]);
    }

    if (!this._onCloseHandler) {
      this._onCloseHandler = () => {
        (this as any).hide();
      };

      window.addEventListener('click', this._onCloseHandler);
    }

    menuRoot.data.ref = 'menu';
    menuRoot.data.style = style;

    return h(
      'span',
      {
        on: {
          contextmenu: (e: MouseEvent) => {
            (this as any).show(e);
          }
        }
      },
      [...children, menuRoot]
    );
  },
  methods: {
    hide() {
      (this.$refs.menu as HTMLElement).style.display = 'none';
    },
    show(e: MouseEvent) {
      if (ACTIVE_MENU) {
        ACTIVE_MENU.hide();
      }

      ACTIVE_MENU = this;
      (this.$refs.menu as HTMLElement).style.display = 'block';
      (this.$refs.menu as HTMLElement).style.left = `${e.pageX}px`;
      (this.$refs.menu as HTMLElement).style.top = `${e.pageY}px`;
      e.preventDefault();
    }
  }
});
