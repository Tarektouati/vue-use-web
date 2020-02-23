import { useHardwareConcurrency } from '../src/HardwareConcurrency';
import { mount, createLocalVue } from '@vue/test-utils';
import { mountCompositionFunc } from './utils';
import VueCompositionAPI from '@vue/composition-api';

const localVue = createLocalVue();
localVue.use(VueCompositionAPI);
localVue.config.silent = true;
localVue.config.warnHandler = jest.fn();
window.console.error = jest.fn();

const mockedhardwareConcurrencyValue = 12;

beforeEach(() => {
  Object.defineProperty(window.navigator, 'hardwareConcurrency', {
    writable: false,
    value: mockedhardwareConcurrencyValue
  });
  jest.mock('../src/utils', () => ({
    hasWindow: jest.fn().mockReturnValue(true)
  }));
});

it('useHardwareConcurrency', () => {
  const { vm } = mount(
    mountCompositionFunc(() => {
      const { logicalProcessors, unsupported } = useHardwareConcurrency();
      return { logicalProcessors, unsupported };
    }),
    { localVue }
  );
  localVue.nextTick();
  expect(vm.logicalProcessors).toEqual(mockedhardwareConcurrencyValue);
  expect(vm.unsupported).toBe(true);
  vm.$destroy();
});
