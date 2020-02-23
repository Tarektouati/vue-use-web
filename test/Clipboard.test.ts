import { useClipboard } from '../src/Clipboard';
import { mount, createLocalVue } from '@vue/test-utils';
import { mountCompositionFunc } from './utils';
import VueCompositionAPI from '@vue/composition-api';

const localVue = createLocalVue();
localVue.use(VueCompositionAPI);
localVue.config.silent = true;
localVue.config.warnHandler = jest.fn();
window.console.error = jest.fn();

const textInclipboard = 'sample text';

const ClipboardMock: Clipboard = {
  readText: jest.fn().mockImplementation(() => Promise.resolve(textInclipboard)),
  writeText: jest.fn(),
  addEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
  removeEventListener: jest.fn()
};

beforeEach(() => {
  Object.defineProperty(navigator, 'clipboard', {
    writable: false,
    value: ClipboardMock
  });
});

it('useClipboard: text', async () => {
  const { vm } = mount(
    mountCompositionFunc(() => {
      const { text } = useClipboard();
      return { text };
    }),
    { localVue }
  );
  await window.dispatchEvent(new Event('copy'));
  await localVue.nextTick();
  expect(vm.text).toBe(textInclipboard);
  expect(ClipboardMock.readText).toHaveBeenCalled();
  vm.$destroy();
});

it('useClipboard: write', async () => {
  const { vm } = mount(
    mountCompositionFunc(() => {
      const { write } = useClipboard();
      return { write };
    }),
    { localVue }
  );
  vm.write('test');
  expect(ClipboardMock.writeText).toHaveBeenCalled();
  vm.$destroy();
});
