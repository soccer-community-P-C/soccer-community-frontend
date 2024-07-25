import { useContext } from 'react';
import {
  LeagueGameContentContext,
  LeagueGameContentSetContext,
} from '@/context/league-game-content-context';

export default function useLeagueGameContent() {
  const leagueGameContent = useContext(LeagueGameContentContext);
  const setLeagueGameContent = useContext(LeagueGameContentSetContext);

  if (!setLeagueGameContent) {
    throw new Error('The ResultOfGameProvider is missing.');
  }

  return { leagueGameContent, setLeagueGameContent };
}
