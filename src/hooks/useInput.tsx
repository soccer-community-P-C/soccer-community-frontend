import { useCallback, useState } from 'react';

export default function useInput(initialValue = '') {
  const [value, setValue] = useState(initialValue);

  const handleChange = useCallback(
    (input: string | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (typeof input === 'string') {
        setValue(input);
      } else {
        setValue(input.target.value);
      }
    },
    [],
  );

  const clear = useCallback(() => {
    setValue('');
  }, []);

  return { value, onChange: handleChange, clear };
}
