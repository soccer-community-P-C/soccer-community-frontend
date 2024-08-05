import { ChangeEvent, useCallback, useState } from 'react';

type InputElement = HTMLInputElement | HTMLTextAreaElement;

export default function useInput(initialValue = '') {
  const [value, setValue] = useState(initialValue);

  const handleChange = useCallback((input: string | ChangeEvent<InputElement>) => {
    if (typeof input === 'string') {
      setValue(input);
    } else {
      setValue(input.target.value);
    }
  }, []);

  const clear = useCallback(() => {
    setValue('');
  }, []);

  return { value, onChange: handleChange, clear };
}
