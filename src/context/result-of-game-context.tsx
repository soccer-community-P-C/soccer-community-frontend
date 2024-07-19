'use client';

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { TLeagueGame } from '@/types/league-games';

export const ResultOfGameContext = createContext<TLeagueGame | null>(null);

export const ResultOfGameSetContext = createContext<Dispatch<SetStateAction<TLeagueGame | null>>>(
  () => {},
);

type ResultOfGameListProviderProps = {
  children: ReactNode;
};

export function ResultOfGameListProvider({ children }: ResultOfGameListProviderProps) {
  const [resultOfGame, setResultOfGame] = useState<TLeagueGame | null>(null);

  return (
    <ResultOfGameContext.Provider value={resultOfGame}>
      <ResultOfGameSetContext.Provider value={setResultOfGame}>
        {children}
      </ResultOfGameSetContext.Provider>{' '}
    </ResultOfGameContext.Provider>
  );
}
