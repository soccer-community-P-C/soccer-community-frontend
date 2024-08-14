import useLeagueName from '@/hooks/useLeagueName';

export default function useAllUrls() {
  const leagueName = useLeagueName();

  const URL_PLAYER_RANK = `/${leagueName}/player-rank`;
  const URL_RANK = `/${leagueName}/rank`;
  const URL_SCHEDULE = `/${leagueName}/schedule`;
  const URL_POST = `/${leagueName}/board`;
  const URL_MATCH = `${URL_SCHEDULE}/match`;

  return { URL_PLAYER_RANK, URL_RANK, URL_SCHEDULE, URL_POST, URL_MATCH };
}
