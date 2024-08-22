// 반응형에 사용할 윈도우 사이즈 커스텀 훅

import { useEffect, useState } from 'react';

export type WindowSize<T extends number | undefined = number | undefined> = {
  width: T;
  height: T;
};

export default function useWindowSize(debounceDelay = 250) {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let timeoutId: NodeJS.Timeout | null = null;

      const handleResize = () => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }, debounceDelay);
      };

      window.addEventListener('resize', handleResize);
      handleResize();

      return () => {
        window.removeEventListener('resize', handleResize);
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      };
    } else {
      return () =>
        window.removeEventListener('resize', () => {
          return null;
        });
    }
  }, [debounceDelay]);

  return windowSize;
}
