import { TTeamInfo } from '@/types/leagues';
import PlLogo from '@/assets/img/logo/pl_logo_small.png';
import LaligaLogo from '@/assets/img/logo/laliga_logo_small.png';

export const ENTIRE_TEAM_ID = 0;

export const entirePLTeams: TTeamInfo = {
  leagueTeamId: ENTIRE_TEAM_ID,
  leagueTeamName: '전체',
  teamType: 'LEAGUE',
  leagueName: 'PL',
  logo: PlLogo.src,
};

export const entireLaligaTeams: TTeamInfo = {
  leagueTeamId: ENTIRE_TEAM_ID,
  leagueTeamName: '전체',
  teamType: 'LEAGUE',
  leagueName: 'LALIGA',
  logo: LaligaLogo.src,
};
