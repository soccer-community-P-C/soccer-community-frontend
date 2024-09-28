interface FormationProps {
  leftFormation: number[];
  rightFormation: number[];
}

export default function Formation({ leftFormation, rightFormation }: FormationProps) {
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

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="relative aspect-[2/1] bg-green-600">
        {renderPlayers(leftFormation, true)}
        {renderPlayers(rightFormation.slice().reverse(), false)}
        <div className="absolute left-1/2 top-0 h-full w-px bg-white" /> {/* 중앙선 */}
      </div>
    </div>
  );
}
