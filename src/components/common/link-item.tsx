import Link, { LinkProps } from 'next/link';
import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { usePathname } from 'next/navigation';

type BaseProps = {
  children: ReactNode;
  className?: string;
};

type LinkItemProps = BaseProps & LinkProps;

type ButtonProps = BaseProps & ComponentPropsWithoutRef<'button'> & { href?: never };

function isRouterLink(props: LinkItemProps | ButtonProps): props is LinkItemProps {
  return 'href' in props;
}

export default function LinkItem({ ...props }: LinkItemProps | ButtonProps) {
  const pathname = usePathname();

  if (isRouterLink(props)) {
    const { children, className, href, ...otherProps } = props;
    return (
      <Link
        className={twMerge(
          'transition hover:text-slate-500 hover:underline sm:text-xl',
          className,
          pathname === href && 'text-slate-500 underline',
        )}
        href={href}
        {...otherProps}
      >
        {children}
      </Link>
    );
  }

  const { children, className, ...otherProps } = props;

  return (
    <button
      className={twMerge('text-xl transition hover:text-slate-500 hover:underline', className)}
      type="button"
      {...otherProps}
    >
      {children}
    </button>
  );
}
