'use client';

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

export const SelectedTeamIdContext = createContext<number>(20);

export const SelectedTeamIdSetContext = createContext<Dispatch<SetStateAction<number>>>(() => {});

type SelectedTeamIdListProviderProps = {
  children: ReactNode;
};

export function SelectedTeamIdContextProvider({ children }: SelectedTeamIdListProviderProps) {
  const [selectedTeamId, setSelectedTeamId] = useState(20);

  return (
    <SelectedTeamIdContext.Provider value={selectedTeamId}>
      <SelectedTeamIdSetContext.Provider value={setSelectedTeamId}>
        {children}
      </SelectedTeamIdSetContext.Provider>{' '}
    </SelectedTeamIdContext.Provider>
  );
}
