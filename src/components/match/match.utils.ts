import { TGameBooking, TGamePlayer, TGameSubstitution } from '@/types/schedules';

export type TSub = TGameSubstitution & Partial<{ cardType: string | undefined | null }>;

export type TLineup = TGamePlayer &
  Partial<TGameBooking> & { hasSub: boolean } & Partial<{
    sub: TSub;
  }>;

export type TLineupObj = {
  home: { [key: number]: TLineup };
  away: { [key: number]: TLineup };
};

export function generateLineupArray(
  homePlayers: TGamePlayer[],
  awayPlayers: TGamePlayer[],
  bookings: TGameBooking[],
  substitutions: TGameSubstitution[],
) {
  const lineupObj: TLineupObj = { home: {}, away: {} };

  for (const player of homePlayers) {
    lineupObj['home'][player.playerId] = Object.assign(player, { hasSub: false });
  }

  for (const player of awayPlayers) {
    lineupObj['away'][player.playerId] = Object.assign(player, { hasSub: false });
  }

  for (const subPlayer of substitutions) {
    lineupObj[subPlayer.substitutionTeam][subPlayer.playerOutId]['hasSub'] = true;
    lineupObj[subPlayer.substitutionTeam][subPlayer.playerOutId]['sub'] = subPlayer;
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

  // sub 선수들중 경고 카드 추가
  for (const player of homeLineup) {
    if (player.hasSub) {
      for (const bookingPlayer of bookings) {
        if (bookingPlayer.playerId === player.sub?.playerInId) {
          player.sub.cardType = bookingPlayer.cardType;
        }
      }
    }
  }

  for (const player of awayLineup) {
    if (player.hasSub) {
      for (const bookingPlayer of bookings) {
        if (bookingPlayer.playerId === player.sub?.playerInId) {
          player.sub.cardType = bookingPlayer.cardType;
        }
      }
    }
  }

  return { homeLineup, awayLineup };
}

export function generateSubLineupArray(
  substitutions: TGameSubstitution[],
  bookings: TGameBooking[],
) {
  const subLineupObj: {
    home: { [key: number]: TGameSubstitution & Partial<{ cardType: string | null | undefined }> };
    away: { [key: number]: TGameSubstitution & Partial<{ cardType: string | null | undefined }> };
  } = {
    home: {},
    away: {},
  };

  for (const substitution of substitutions) {
    subLineupObj[substitution.substitutionTeam][substitution.playerInId] = substitution;
  }

  for (const player of bookings) {
    if (player.playerId in subLineupObj['home']) {
      subLineupObj['home'][player.playerId]['cardType'] = player.cardType;
    } else if (player.playerId in subLineupObj['away']) {
      subLineupObj['away'][player.playerId]['cardType'] = player.cardType;
    }
  }

  const homeSubLineup = Object.values(subLineupObj.home);
  const awaySubLineup = Object.values(subLineupObj.away);

  return { homeSubLineup, awaySubLineup };
}

export function splitName(name: string) {
  // 띄어쓰기로 구분된 성과 이름은 분리해서 출력
  // ex) 반 다이크 ==> 반, 다이크

  const firstName = name.split(' ')[0];
  const restName = name.split(' ').slice(1).join(' ');

  return [firstName, restName] as const;
}
