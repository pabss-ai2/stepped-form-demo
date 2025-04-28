export const debounce = <T extends (...args: any[]) => void>(
  callback: T,
  wait: number,
): ((...args: Parameters<T>) => void) => {
  let timeoutId: number | null = null;
  console.log('starting timeout');
  return (...args: Parameters<T>) => {
    console.log('timeout');
    if (timeoutId !== null) {
      window.clearTimeout(timeoutId);
    }
    timeoutId = window.setTimeout(() => {
      callback(...args);
    }, wait);
  };
};
