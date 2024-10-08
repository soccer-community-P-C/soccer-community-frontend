import CardIcon from '@/components/match/card/card-icon';

type CardProps = {
  cardType: string | null | undefined;
  className?: string;
};
export default function Card({ cardType, className = '' }: CardProps) {
  if (!cardType) {
    return null;
  }

  if (cardType === 'YELLOW_RED') {
    return (
      <span className={className}>
        <div className="relative">
          <CardIcon color="YELLOW" />
          <CardIcon className="absolute right-[-4px] top-0" color="RED" />
        </div>
      </span>
    );
  }

  return (
    <span className={className}>
      <CardIcon color={cardType} />
    </span>
  );
}
