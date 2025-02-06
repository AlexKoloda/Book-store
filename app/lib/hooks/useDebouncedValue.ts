import React from 'react'

export const useDebouncedValue = <T = unknown>(value: T, timer = 300) => {
  const [debouncedValue, setDebouncedValue] = React.useState<T>(value);
  const timerRef = React.useRef< NodeJS.Timeout | undefined>(undefined);

  React.useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    timerRef.current = setTimeout(() => {
      setDebouncedValue(value);
    }, timer);
  }, [timer, value]);

  return debouncedValue;

}