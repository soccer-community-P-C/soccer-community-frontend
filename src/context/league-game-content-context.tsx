'use client';

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { TGame } from '@/types/league-games';

export const LeagueGameContentContext = createContext<TGame | null>(null);

export const LeagueGameContentSetContext = createContext<Dispatch<SetStateAction<TGame | null>>>(
  () => {},
);

type LeagueGameContentListProviderProps = {
  children: ReactNode;
};

export function LeagueGameContextProvider({ children }: LeagueGameContentListProviderProps) {
  const [leagueGameContent, setLeagueGameContent] = useState<TGame | null>(null);

  return (
    <LeagueGameContentContext.Provider value={leagueGameContent}>
      <LeagueGameContentSetContext.Provider value={setLeagueGameContent}>
        {children}
      </LeagueGameContentSetContext.Provider>{' '}
    </LeagueGameContentContext.Provider>
  );
}
