import { render, waitFor } from '@testing-library/vue';
import { VueClass, createLocalVue } from '@vue/test-utils';
import VueCompositionAPI from '@vue/composition-api';
import { useFetch } from '../src/Fetch';

const localVue = createLocalVue();
localVue.use(VueCompositionAPI);
localVue.config.silent = true;
localVue.config.warnHandler = jest.fn();
window.console.error = jest.fn();

const MOCK_TXT_BODY = 'mocked response';
const MOCK_JSON_BODY: Record<string, boolean> = { mock: true };

const MOCK_HEADERS_JSON: HeadersInit = {
  'Content-Type': 'application/json; charset=utf-8'
};

const MOCK_HEADERS_TEXT: HeadersInit = {
  'Content-Type': 'text/plain'
};

const headersMock = (setJsonContentType: boolean): Headers =>
  new Headers(setJsonContentType ? MOCK_HEADERS_JSON : MOCK_HEADERS_TEXT);

const mockResponse = (setJsonContentType: boolean): Response => ({
  arrayBuffer: (): Promise<ArrayBuffer> => Promise.resolve((null as any) as ArrayBuffer),
  blob: (): Promise<Blob> => Promise.resolve((null as any) as Blob),
  body: null,
  bodyUsed: true,
  clone: (): Response => mockResponse(setJsonContentType),
  formData: (): Promise<FormData> => Promise.resolve((null as any) as FormData),
  headers: headersMock(setJsonContentType),
  json: (): Promise<Record<string, any>> => Promise.resolve(MOCK_JSON_BODY),
  ok: true,
  redirected: false,
  status: 200,
  statusText: 'ok',
  text: (): Promise<string> => Promise.resolve(MOCK_TXT_BODY),
  trailer: Promise.resolve(headersMock(setJsonContentType)),
  type: (null as any) as ResponseType,
  url: 'http://endpoint.com/json'
});

afterEach(() => {
  delete window.fetch;
});

const renderWithCompositionApi = (component: VueClass<Vue>, options?: any) =>
  render(component, options, vue => vue.use(VueCompositionAPI));

const FetchComponent = localVue.component('use-fetch-component', {
  setup() {
    const { isLoading, success, response } = useFetch('http://endpoint.com/json', {});
    return { isLoading, success, response };
  },
  template: `
    <div>
      <div v-if="isLoading">Loading...</div>
      <div v-if="success" data-testid="response">{{ JSON.stringify(response) }}</div>
    </div>
    `
});

it('useFetch: response in json', async () => {
  window.fetch = jest.fn().mockResolvedValue(mockResponse(true));
  const { getByText, getByTestId } = renderWithCompositionApi(FetchComponent);
  await waitFor(() => getByText('Loading...'));
  const response = getByTestId('response');
  await waitFor(() => expect(JSON.parse(response.textContent as string)).toEqual(MOCK_JSON_BODY));
});

it('useFetch: response in text', async () => {
  window.fetch = jest.fn().mockResolvedValue(mockResponse(false));
  const { getByText, getByTestId } = renderWithCompositionApi(FetchComponent);
  await waitFor(() => getByText('Loading...'));
  const response = getByTestId('response');
  await waitFor(() => expect(JSON.parse(response.textContent as string)).toEqual(MOCK_TXT_BODY));
});
