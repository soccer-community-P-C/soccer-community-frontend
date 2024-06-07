import styles from './loading-dots.module.css';

interface LoadingDotsProps {
  color?: string;
}

const LoadingDots = ({ color = '#000' }: LoadingDotsProps) => {
  return (
    <span className={styles.loading}>
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
    </span>
  );
};

export default function Loading() {
  return (
    <div className="h-[60vh]">
      <div className="mx-auto mt-[20vh] h-10 w-48 animate-pulse rounded-md bg-stone-100 dark:bg-stone-800">
        <div className="flex h-full w-full items-center justify-center">
          <LoadingDots />
        </div>
      </div>
    </div>
  );
}
