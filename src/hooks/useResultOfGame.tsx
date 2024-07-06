import { useContext } from 'react';
import { ResultOfGameContext, ResultOfGameSetContext } from '@/context/result-of-game-context';

export default function useResultOfGame() {
  const resultOfGame = useContext(ResultOfGameContext);
  const setResultOfGame = useContext(ResultOfGameSetContext);

  if (!setResultOfGame) {
    throw new Error('The ResultOfGameProvider is missing.');
  }

  return { resultOfGame, setResultOfGame };
}
