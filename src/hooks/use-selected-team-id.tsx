import { useContext } from 'react';
import {
  SelectedTeamIdContext,
  SelectedTeamIdSetContext,
} from '@/context/selected-team-id-context';
export default function useLeagueGameContent() {
  const selectedTeamId = useContext(SelectedTeamIdContext);
  const setSelectedTeamId = useContext(SelectedTeamIdSetContext);

  if (!setSelectedTeamId) {
    throw new Error('The setSelectedTeamId is missing.');
  }

  return { selectedTeamId, setSelectedTeamId };
}
