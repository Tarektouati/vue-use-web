import { useBattery, NavigatorWithBattery, BatteryManager } from '../src/Battery';
import { mount, createLocalVue } from '@vue/test-utils';
import { mountCompositionFunc } from './utils';
import VueCompositionAPI from '@vue/composition-api';

const localVue = createLocalVue();
localVue.use(VueCompositionAPI);
localVue.config.silent = true;
localVue.config.warnHandler = jest.fn();
window.console.error = jest.fn();

const mockedBrowserResponse: BatteryManager = {
  charging: true,
  chargingTime: 250,
  dischargingTime: 6540,
  level: 4,
  addEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
  removeEventListener: jest.fn()
};

beforeEach(() => {
  (navigator as NavigatorWithBattery).getBattery = jest
    .fn()
    .mockImplementation(() => Promise.resolve(mockedBrowserResponse));
});

it('useBattery', async () => {
  const { vm } = mount(
    mountCompositionFunc(() => {
      const { isCharging, chargingTime, dischargingTime, level } = useBattery();
      return { isCharging, chargingTime, dischargingTime, level };
    }),
    { localVue }
  );
  await localVue.nextTick();
  expect(vm.isCharging).toBe(mockedBrowserResponse.charging);
  expect(vm.chargingTime).toBe(mockedBrowserResponse.chargingTime);
  expect(vm.dischargingTime).toBe(mockedBrowserResponse.dischargingTime);
  expect(vm.level).toBe(mockedBrowserResponse.level);
  vm.$destroy();
});
