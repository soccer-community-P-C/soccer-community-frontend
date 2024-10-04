type FormationItemProps = {
  formation: number[];
  isLeft: boolean;
};

export default function FormationItem({ formation, isLeft }: FormationItemProps) {
  const reversedFormation = isLeft ? formation : [...formation].reverse();

  return (
    <div
      className={`relative flex h-[300px] w-full flex-row bg-[#247847] md:h-full md:w-1/2 ${isLeft ? 'sm:rounded-l-lg sm:pr-8' : 'sm:rounded-r-lg sm:pl-8'}`}
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
