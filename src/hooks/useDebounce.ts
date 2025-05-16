import { onUnmounted } from 'vue';
import { debounce, DebounceSettings } from 'lodash-es';

/**
 * @description 防抖 Hooks 默认
 * @param fn Function to debounce
 * @param delay Number of milliseconds to delay
 * @param options  leading: true 表示首次调用返回值方法时，会立即调用 fn
 * @param options  trailing: false 表示禁用第一次成功调用返回值方法后，经过 delay 毫秒后，才会禁用
 * @returns  DebouncedFunc
 */
export function useDebounce(
  fn,
  delay,
  options: DebounceSettings = { leading: true, trailing: false },
) {
  const debouncedFn = debounce(
    (...args) => {
      fn(...args);
    },
    delay,
    options,
  );

  onUnmounted(() => {
    debouncedFn.cancel();
  });

  return debouncedFn;
}
