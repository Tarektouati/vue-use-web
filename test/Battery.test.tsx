import { useBattery, NavigatorWithBattery, BatteryManager } from '../src/Battery';
import { mount, createLocalVue } from '@vue/test-utils';
import { VNode, CreateElement } from 'vue';
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

const mockGetBattery = jest.fn().mockImplementation(() => Promise.resolve(mockedBrowserResponse));

(navigator as NavigatorWithBattery).getBattery = mockGetBattery;

const mountCompositionFunc = (cb: () => any) => ({
  setup() {
    return cb();
  },
  render(h: CreateElement): VNode {
    return h('div');
  }
});

describe('Battery', () => {
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

  it('useBattery Events', async () => {
    const { vm } = mount(
      mountCompositionFunc(() => {
        const values = useBattery();
        return values;
      }),
      { localVue }
    );
    expect(mockedBrowserResponse.addEventListener).toHaveBeenCalledWith('chargingchange', expect.any(Function));
    expect(mockedBrowserResponse.addEventListener).toHaveBeenCalledWith('chargingtimechange', expect.any(Function));
    expect(mockedBrowserResponse.addEventListener).toHaveBeenCalledWith('dischargingtimechange', expect.any(Function));
    expect(mockedBrowserResponse.addEventListener).toHaveBeenCalledWith('levelchange', expect.any(Function));

    expect(mockedBrowserResponse.removeEventListener).toHaveBeenCalledWith('chargingchange', expect.any(Function));
    expect(mockedBrowserResponse.removeEventListener).toHaveBeenCalledWith('chargingtimechange', expect.any(Function));
    expect(mockedBrowserResponse.removeEventListener).toHaveBeenCalledWith(
      'dischargingtimechange',
      expect.any(Function)
    );
    expect(mockedBrowserResponse.removeEventListener).toHaveBeenCalledWith('levelchange', expect.any(Function));
    vm.$destroy();
  });
});
