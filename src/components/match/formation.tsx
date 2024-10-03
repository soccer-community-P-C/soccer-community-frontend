import { TGamePlayer } from '@/types/schedules';
import { cn } from '@/utils/cn';

interface FormationProps {
  leftFormation: number[];
  rightFormation: number[];
  homePlayers: TGamePlayer[] | null;
  awayPlayers: TGamePlayer[] | null;
}

export default function Formation({
  homePlayers,
  awayPlayers,
  leftFormation,
  rightFormation,
}: FormationProps) {
  function renderPlayers(formation: number[], isLeft: boolean) {
    let playerCount = 0;

    return formation.map((playersInRow, rowIndex) => (
      <div
        className={`absolute flex ${isLeft ? 'left-0' : 'right-0'} h-full items-center`}
        key={rowIndex}
        style={{
          width: '50%',
          left: isLeft ? `${(rowIndex * 50) / formation.length}%` : 'auto',
          right: !isLeft ? `${(rowIndex * 50) / formation.length}%` : 'auto',
        }}
      >
        <div className="flex h-full w-full flex-col items-center justify-around">
          {[...Array(playersInRow)].map((_, playerIndex) => {
            playerCount++;
            return (
              <div
                className={`h-4 w-4 rounded-full ${isLeft ? 'bg-blue-500' : 'bg-red-500'}`}
                key={playerIndex}
                title={`Player ${playerCount}`}
              />
            );
          })}
        </div>
      </div>
    ));
  }

  function testRender(formation: number[], isLeft: boolean) {
    const reversedFormation = isLeft ? formation : [...formation].reverse();
    return (
      <div
        className={cn(
          `relative flex h-[300px] w-full flex-row bg-[#247847] md:h-full md:w-1/2`,
          isLeft ? 'sm:rounded-l-lg sm:pr-8' : 'sm:rounded-r-lg sm:pl-8',
        )}
      >
        <span
          className={`absolute top-1/2 z-10 h-[220px] w-[80px] translate-y-[-50%] border-2 ${isLeft ? 'left-0 border-l-0' : 'right-0 border-r-0'} border-[#338657] bg-[#247847]`}
        >
          <span
            className={`absolute top-1/2 h-[120px] w-[30px] translate-y-[-50%] border-2 border-[#338657] ${isLeft ? 'left-0 border-l-0' : 'right-0 border-r-0'}`}
          />
        </span>
        <span
          className={`absolute top-1/2 z-[5] h-[110px] w-[110px] translate-y-[-50%] rounded-full border-2 border-[#338657] ${isLeft ? 'left-0' : 'right-0'}`}
        />

        {reversedFormation.map((playerCount, playerCountIndex) => (
          <div
            className="z-50 h-full w-full"
            key={playerCountIndex}
            style={{
              left: isLeft ? `${(playerCountIndex * 50) / reversedFormation.length}%` : 'auto',
            }}
          >
            {Array(playerCount)
              .fill(0)
              .map((_, index) => (
                <div
                  className="flex-all-center"
                  key={index}
                  style={{ height: `${100 / playerCount - 1}%` }}
                >
                  <span
                    className={`${isLeft ? 'bg-blue-500' : 'bg-red-500'} h-6 w-6 rounded-full border border-white`}
                  />
                </div>
              ))}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full md:h-[400px]">
      <div className="relative flex h-full w-full flex-col sm:flex-row">
        {testRender(leftFormation, true)}
        {testRender(rightFormation, false)}
        <span className="sm-block absolute left-1/2 top-0 h-full w-[2px] bg-[#338657]" />
        <span className="absolute left-0 top-1/2 h-[2px] w-full bg-[#338657] sm:hidden" />
        <span className="sm-block absolute left-1/2 top-1/2 h-[100px] w-[100px] translate-x-[-50%] translate-y-[-50%] rounded-full border-2 border-[#338657]" />{' '}
      </div>
      {/*<div className="relative aspect-[2/1] bg-[#247847]">*/}
      {/*  {renderPlayers(leftFormation, true)}*/}
      {/*  /!*{renderPlayers(rightFormation.slice().reverse(), false)}*!/*/}
      {/*  <div className="absolute left-1/2 top-0 h-full w-px bg-white" /> /!* 중앙선 *!/*/}
      {/*</div>*/}
    </div>
  );
}
