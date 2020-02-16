import { useFullscreen } from '../src/FullScreen';
import { mount, createLocalVue } from '@vue/test-utils';
import { mountCompositionFunc } from './utils';
import VueCompositionAPI from '@vue/composition-api';

const localVue = createLocalVue();
localVue.use(VueCompositionAPI);
localVue.config.silent = true;
localVue.config.warnHandler = jest.fn();
window.console.error = jest.fn();

const mockedElement: any = { value: { requestFullscreen: jest.fn().mockImplementation(() => Promise.resolve()) } };
const mockedExitFullscreen = jest.fn();

beforeEach(() => {
  Object.defineProperty(document, 'fullscreenElement', {
    writable: false,
    value: true
  });
  document.exitFullscreen = mockedExitFullscreen;
});

it('useFullscreen: isFullscreen', () => {
  const { vm } = mount(
    mountCompositionFunc(() => {
      const { isFullscreen } = useFullscreen(mockedElement);
      return { isFullscreen };
    }),
    { localVue }
  );
  localVue.nextTick();
  expect(vm.isFullscreen).toBe(false);
  vm.$destroy();
});

it('useFullscreen: enterFullscreen', async () => {
  const { vm } = mount(
    mountCompositionFunc(() => {
      const { isFullscreen, enterFullscreen } = useFullscreen(mockedElement);
      return { isFullscreen, enterFullscreen };
    }),
    { localVue }
  );
  localVue.nextTick();
  await vm.enterFullscreen();
  expect(mockedElement.value.requestFullscreen).toHaveBeenCalled();
  expect(vm.isFullscreen).toBe(true);
  vm.$destroy();
});

it('useFullscreen: exitFullscreen', () => {
  const { vm } = mount(
    mountCompositionFunc(() => {
      const { isFullscreen, exitFullscreen } = useFullscreen(mockedElement);
      return { isFullscreen, exitFullscreen };
    }),
    { localVue }
  );
  localVue.nextTick();
  vm.exitFullscreen();
  expect(vm.isFullscreen).toBe(false);
  expect(mockedExitFullscreen).toHaveBeenCalled();
  vm.$destroy();
});
