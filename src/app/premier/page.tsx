import Result from '@/components/Result/Result';
import ContentHeader from '@/components/Common/ContentHeader/ContentHeader';

export default function PremierPage() {
  return (
    <section className="mx-auto my-4 w-4/5">
      <header>
        <ContentHeader />
      </header>

      <article className="mt-4">
        <Result />
      </article>
    </section>
  );
}
