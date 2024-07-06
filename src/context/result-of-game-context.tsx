'use client';

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { TResultOfGame } from '@/types/result-of-game-type';

export const ResultOfGameContext = createContext<TResultOfGame | null>(null);

export const ResultOfGameSetContext = createContext<Dispatch<SetStateAction<TResultOfGame | null>>>(
  () => {},
);

type ResultOfGameListProviderProps = {
  children: ReactNode;
};

export function ResultOfGameListProvider({ children }: ResultOfGameListProviderProps) {
  const [resultOfGame, setResultOfGame] = useState<TResultOfGame | null>(null);

  return (
    <ResultOfGameContext.Provider value={resultOfGame}>
      <ResultOfGameSetContext.Provider value={setResultOfGame}>
        {children}
      </ResultOfGameSetContext.Provider>{' '}
    </ResultOfGameContext.Provider>
  );
}
