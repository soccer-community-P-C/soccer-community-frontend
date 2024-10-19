import { TGameBooking, TGamePlayer, TGameSubstitution } from '@/types/schedules';

export const NO_SUB_MINUTE = 9999; // 교체 없을시 기본값

export type TSub = {
  hasSub: boolean;
  subMinute: number;
  subPlayerOutId: number;
  subPlayerOutName: string;
  subCardType: string | null | undefined;
};

export type TLineup = TGamePlayer & Partial<TGameBooking> & Partial<TSub> & { subMinute: number };

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
    lineupObj['home'][player.playerId] = Object.assign(player, {
      hasSub: false,
      subMinute: NO_SUB_MINUTE,
    });
  }

  for (const player of awayPlayers) {
    lineupObj['away'][player.playerId] = Object.assign(player, {
      hasSub: false,
      subMinute: NO_SUB_MINUTE,
    });
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
    if (substitution.playerInId in homeSubLineupObj) {
      homeSubLineupObj[substitution.playerInId].hasSub = true;
      homeSubLineupObj[substitution.playerInId].subMinute = substitution.minute;
      homeSubLineupObj[substitution.playerInId].subPlayerOutId = substitution.playerOutId;
      homeSubLineupObj[substitution.playerInId].subPlayerOutName = substitution.playerOutName;
    }

    if (substitution.playerInId in awaySubLineupObj) {
      awaySubLineupObj[substitution.playerInId].hasSub = true;
      awaySubLineupObj[substitution.playerInId].subMinute = substitution.minute;
      awaySubLineupObj[substitution.playerInId].subPlayerOutId = substitution.playerOutId;
      awaySubLineupObj[substitution.playerInId].subPlayerOutName = substitution.playerOutName;
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

  homeSubLineup.sort((a, b) => a.subMinute - b.subMinute);
  awaySubLineup.sort((a, b) => a.subMinute - b.subMinute);

  return { homeSubLineup, awaySubLineup };
}

export function splitName(name: string) {
  // 띄어쓰기로 구분된 성과 이름은 분리해서 출력
  // ex) 반 다이크 ==> 반, 다이크
  const firstName = name.split(' ')[0];
  const restName = name.split(' ').slice(1).join(' ');

  return [firstName, restName] as const;
}
