import { TGameBooking, TGamePlayer, TGameSubstitution } from '@/types/schedules';

export type TSub = {
  hasSub: boolean;
  subMinute: number;
  subPlayerInId: number;
  subPlayerInName: string;
  subCardType: string | null | undefined;
};

export type TLineup = TGamePlayer & Partial<TGameBooking> & Partial<TSub>;

export type TLineupObj = {
  home: { [key: number]: TLineup };
  away: { [key: number]: TLineup };
};

export function generateLineupArray(
  homePlayers: TGamePlayer[],
  awayPlayers: TGamePlayer[],
  bookings: TGameBooking[],
) {
  const lineupObj: TLineupObj = { home: {}, away: {} };

  for (const player of homePlayers) {
    lineupObj['home'][player.playerId] = Object.assign(player, { hasSub: false });
  }

  for (const player of awayPlayers) {
    lineupObj['away'][player.playerId] = Object.assign(player, { hasSub: false });
  }

  for (const player of bookings) {
    if (player.playerId in lineupObj['home']) {
      lineupObj['home'][player.playerId]['cardType'] = player.cardType;
      lineupObj['home'][player.playerId]['minute'] = player.minute;
    } else if (player.playerId in lineupObj['away']) {
      lineupObj['away'][player.playerId]['cardType'] = player.cardType;
      lineupObj['away'][player.playerId]['minute'] = player.minute;
    }
  }

  const homeLineup = Object.values(lineupObj.home);
  const awayLineup = Object.values(lineupObj.away);

  return { homeLineup, awayLineup, homeLineupObj: lineupObj.home, awayLineupObj: lineupObj.away };
}

export function generateSubLineupArray(
  homeBenchPlayers: TGamePlayer[],
  awayBenchPlayers: TGamePlayer[],
  substitutions: TGameSubstitution[],
  bookings: TGameBooking[],
) {
  const { homeLineupObj: homeSubLineupObj, awayLineupObj: awaySubLineupObj } = generateLineupArray(
    homeBenchPlayers,
    awayBenchPlayers,
    bookings,
  );

  for (const substitution of substitutions) {
    if (substitution.playerOutId in homeSubLineupObj) {
      homeSubLineupObj[substitution.playerOutId].hasSub = true;
      homeSubLineupObj[substitution.playerOutId].subMinute = substitution.minute;
      homeSubLineupObj[substitution.playerOutId].subPlayerInId = substitution.playerInId;
      homeSubLineupObj[substitution.playerOutId].subPlayerInName = substitution.playerInName;
    }

    if (substitution.playerOutId in awaySubLineupObj) {
      awaySubLineupObj[substitution.playerOutId].hasSub = true;
      awaySubLineupObj[substitution.playerOutId].subMinute = substitution.minute;
      awaySubLineupObj[substitution.playerOutId].subPlayerInId = substitution.playerInId;
      awaySubLineupObj[substitution.playerOutId].subPlayerInName = substitution.playerInName;
    }
  }

  for (const player of bookings) {
    if (player.playerId in homeSubLineupObj && homeSubLineupObj[player.playerId].hasSub) {
      homeSubLineupObj[player.playerId].subCardType = player.cardType;
    } else if (player.playerId in awaySubLineupObj && awaySubLineupObj[player.playerId].hasSub) {
      awaySubLineupObj[player.playerId].subCardType = player.cardType;
    }
  }

  const homeSubLineup = Object.values(homeSubLineupObj);
  const awaySubLineup = Object.values(awaySubLineupObj);

  return { homeSubLineup, awaySubLineup };
}

export function splitName(name: string) {
  // 띄어쓰기로 구분된 성과 이름은 분리해서 출력
  // ex) 반 다이크 ==> 반, 다이크
  const firstName = name.split(' ')[0];
  const restName = name.split(' ').slice(1).join(' ');

  return [firstName, restName] as const;
}
