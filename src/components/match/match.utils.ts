import { TGameBooking, TGamePlayer } from '@/types/schedules';

type TLineupObj = {
  home: { [key: number]: TGamePlayer & Partial<TGameBooking> };
  away: { [key: number]: TGamePlayer & Partial<TGameBooking> };
};

export function generateLineupArray(
  homePlayers: TGamePlayer[],
  awayPlayers: TGamePlayer[],
  bookings: TGameBooking[],
) {
  const lineupObj: TLineupObj = { home: {}, away: {} };

  for (const player of homePlayers) {
    lineupObj['home'][player.playerId] = player;
  }

  for (const player of awayPlayers) {
    lineupObj['away'][player.playerId] = player;
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

  return { homeLineup, awayLineup };
}

export function splitName(name: string) {
  // 띄어쓰기로 구분된 성과 이름은 분리해서 출력
  // ex) 반 다이크 ==> 반, 다이크

  const firstName = name.split(' ')[0];
  const restName = name.split(' ').slice(1).join(' ');

  return [firstName, restName] as const;
}
