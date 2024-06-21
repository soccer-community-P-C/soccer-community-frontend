// async function getData() {
//   const res = await fetch(`${process.env.API_URL}/leagueGame/date/2024-02-01`);
//   if (!res.ok) {
//     throw new Error('fail');
//   }
//
//   return res.json();
// }

export default async function HomePage() {
  // const data = await getData();

  return (
    <>
      <header>헤더</header>
      <section>
        <div>날짜</div>
        <article className="h-screen">경기 결과</article>
      </section>
    </>
  );
}
