import { useLocalStorage } from '../src/LocalStorage';
import { mount, createLocalVue } from '@vue/test-utils';
import { mountCompositionFunc } from './utils';
import VueCompositionAPI from '@vue/composition-api';

const localVue = createLocalVue();
localVue.use(VueCompositionAPI);
localVue.config.silent = true;
localVue.config.warnHandler = jest.fn();
window.console.error = jest.fn();

const mocklocalStorage = {
  key: 'test-key',
  value: 'testValue'
};

beforeEach(() => {
  window.localStorage.clear();
});

it('useLocalStorage: Get localStorage value', () => {
  window.localStorage.setItem(mocklocalStorage.key, mocklocalStorage.value);
  const { vm } = mount(
    mountCompositionFunc(() => {
      const { value } = useLocalStorage(mocklocalStorage.key);
      return { value };
    }),
    { localVue }
  );
  localVue.nextTick();
  expect(vm.value).toEqual(mocklocalStorage.value);
  vm.$destroy();
});

it('useLocalStorage: Set localStorage value', () => {
  const { vm } = mount(
    mountCompositionFunc(() => {
      const { value } = useLocalStorage(mocklocalStorage.key, mocklocalStorage.value);
      return { value };
    }),
    { localVue }
  );
  localVue.nextTick();
  expect(vm.value).toEqual(mocklocalStorage.value);
  vm.$destroy();
});
