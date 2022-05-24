import { reactive , toRefs, ref } from '@vue/composition-api';



export type AsyncState<T> =
  | {
      loading: boolean;
      error?: undefined;
      value?: undefined;
    }
    |{
        loading: true;
        error?: Error | undefined;
        value?: undefined;
      }
  | {
      loading: false;
      error: Error;
      value?: undefined;
    }
  | {
      loading: false;
      error?: undefined;
      value: T ;
};


export type PromiseType<P extends Promise<any>> = P extends Promise<infer T> ? T : never;

export type FunctionReturningPromise = (...args: any[]) => Promise<any>;

// 根据 async 函数返回的值，自动推导出需要的  state 类型
export type StateFromFunctionReturningPromise<T extends  FunctionReturningPromise>  = AsyncState<PromiseType< ReturnType< T > >>

// 推导返回值类型
export type AsyncFnReturn<T extends FunctionReturningPromise = FunctionReturningPromise > = [
    StateFromFunctionReturningPromise<T>,
    T
]

const useAsyncFn = <T extends FunctionReturningPromise > (fn:T):AsyncFnReturn<T>=>{
    let data = reactive({
        value:undefined ,
        loading:false,
        error:undefined
    });
    let lastCallId = ref(0);
    const callBack = ((...args : Parameters<T>):ReturnType<T>=>{
        data.loading = true;
        const callId = ++lastCallId.value; // 避免短时间内，多次触发。导致结果错乱
       return fn(...args).then((res)=>{
            if(callId === lastCallId.value){
                data.value = res;
                data.loading = false;
            }
            return res;
        },(err)=>{
            if(callId === lastCallId.value){
                data.error = err
                data.loading = false;
            }
            return Promise.reject(err);
        }) as ReturnType<T>
    });
    return [toRefs(data), (callBack as unknown) as T ];
}

export useAsyncFn;