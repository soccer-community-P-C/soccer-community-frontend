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

  // for (const subPlayer of substitutions) {
  //   // 교체 출전 선수가 또 교체될때 상황 고려 필요
  //   if (subPlayer.playerOutId in lineupObj[subPlayer.substitutionTeam]) {
  //     lineupObj[subPlayer.substitutionTeam][subPlayer.playerOutId]['hasSub'] = true;
  //     lineupObj[subPlayer.substitutionTeam][subPlayer.playerOutId]['sub'] = subPlayer;
  //   }
  // }

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

  // // sub 선수들중 경고 카드 추가
  // for (const player of homeLineup) {
  //   if (player.hasSub) {
  //     for (const bookingPlayer of bookings) {
  //       if (bookingPlayer.playerId === player.sub?.playerInId) {
  //         player.sub.cardType = bookingPlayer.cardType;
  //       }
  //     }
  //   }
  // }

  // for (const player of awayLineup) {
  //   if (player.hasSub) {
  //     for (const bookingPlayer of bookings) {
  //       if (bookingPlayer.playerId === player.sub?.playerInId) {
  //         player.sub.cardType = bookingPlayer.cardType;
  //       }
  //     }
  //   }
  // }

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

  // const subLineupObj: {
  //   home: { [key: number]: TGameSubstitution & Partial<{ cardType: string | null | undefined }> };
  //   away: { [key: number]: TGameSubstitution & Partial<{ cardType: string | null | undefined }> };
  // } = {
  //   home: {},
  //   away: {},
  // };
  //
  // for (const substitution of substitutions) {
  //   subLineupObj[substitution.substitutionTeam][substitution.playerInId] = substitution;
  // }

  // for (const player of bookings) {
  //   if (player.playerId in subLineupObj['home']) {
  //     subLineupObj['home'][player.playerId]['cardType'] = player.cardType;
  //   } else if (player.playerId in subLineupObj['away']) {
  //     subLineupObj['away'][player.playerId]['cardType'] = player.cardType;
  //   }
  // }
  //

  for (const player of bookings) {
    if (player.playerId in homeSubLineupObj && homeSubLineupObj[player.playerId].hasSub) {
      homeSubLineupObj[player.playerId].subCardType = player.cardType;
    } else if (player.playerId in awaySubLineupObj && awaySubLineupObj[player.playerId].hasSub) {
      awaySubLineupObj[player.playerId].subCardType = player.cardType;
    }
  }

  const homeSubLineup = Object.values(homeSubLineupObj);
  const awaySubLineup = Object.values(awaySubLineupObj);

  // homeSubLineup.sort((a, b) => a.minute - b.minute);
  // awaySubLineup.sort((a, b) => a.minute - b.minute);
  return { homeSubLineup, awaySubLineup };
}

export function splitName(name: string) {
  // 띄어쓰기로 구분된 성과 이름은 분리해서 출력
  // ex) 반 다이크 ==> 반, 다이크
  const firstName = name.split(' ')[0];
  const restName = name.split(' ').slice(1).join(' ');

  return [firstName, restName] as const;
}
