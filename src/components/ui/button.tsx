// import { ComponentPropsWithoutRef, ReactNode } from 'react';
// import { twMerge } from 'tailwind-merge';
//
// type ButtonProps = {
//   children: ReactNode;
//   className?: string;
// } & ComponentPropsWithoutRef<'button'>;
// export default function Button({ children, className = '', ...otherProps }: ButtonProps) {
//   return (
//     //focus:outline-none focus:ring-4 focus:ring-gray-100
//     <button
//       className={twMerge(
//         `
//         h-9 justify-center whitespace-nowrap rounded-md border border-gray-300 bg-white px-4 py-2
//         text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-100
//         disabled:pointer-events-none disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800
//       dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700
//        `,
//         className,
//       )}
//       type="button"
//       {...otherProps}
//     >
//       {children}
//     </button>
//   );
// }

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'border border-input bg-background hover:bg-primary/90 hover:text-primary-foreground',
        // default: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        // outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        'no-outline': 'bg-primary text-primary-foreground hover:bg-primary/90',

        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
