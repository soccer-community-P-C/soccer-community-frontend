import { instance } from '@/api/intance';
import {
  TGetAllPlayerList,
  TGetPlayer,
  TGetPlayerCommentList,
  TPlayerId,
  TWritePlayerComment,
} from '@/types/players';

const ENDPOINT = '/player';

// /api/player/search
async function getAllPlayerList() {
  const { data } = await instance.get<TGetAllPlayerList>(`${ENDPOINT}/search}`);

  return data.apiResponseList;
}

// /api/player/search/{playerId}
async function getPlayer({ playerId }: TPlayerId) {
  const { data } = await instance.get<TGetPlayer>(`${ENDPOINT}/search/${playerId}`);

  console.log(data);
  return { ...data };
}

// /api/player/comment/search/{playerId}
async function getPlayerCommentList({ playerId }: TPlayerId) {
  const { data } = await instance.get<TGetPlayerCommentList>(
    `${ENDPOINT}/comment/search/${playerId}`,
  );

  return data.playerComments;
}

// /api/player/comment/{playerId}
async function writePlayerComment({ playerId, comment }: TWritePlayerComment) {
  await instance.post(`${ENDPOINT}/comment/${playerId}`, { comment });
}

export { getPlayer, getAllPlayerList, getPlayerCommentList, writePlayerComment };
