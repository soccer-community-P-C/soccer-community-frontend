'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import MatchHeader from '@/components/match/match-header';
import MatchSection from '@/components/match/match-section';
import Loading from '@/app/(league)/loading';

export type MatchProps = {
  home: string;
  away: string;
  date: string;
};

export default function Match() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const date = searchParams.get('date');
  const teamList = searchParams.get('team')?.split('-');

  useEffect(() => {
    if (!date || !teamList) {
      router.back(); // Redirect to the home page or another appropriate page
    }
  }, [date, teamList, router]);

  if (!date || !teamList) {
    return <Loading />;
  }

  const [home, away] = teamList as string[];

  return (
    <>
      <MatchHeader away={away} date={date as string} home={home} />
      <MatchSection away={away} home={home} />
    </>
  );
}
