'use client';

import { ReactNode, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      className,
      onClick,
      disabled = false,
      type = 'button',
      href,
      ...props
    },
    ref
  ) => {
    // slightly larger radius & soft default shadow for “rocker” look
    const base =
      'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-100 ' +
      'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ' +
      'disabled:opacity-50 disabled:cursor-not-allowed ' +
      'shadow-sm';

    // solid default look; subtle luminous hover/focus glow (<= 0.2)
    const variants: Record<ButtonVariant, string> = {
      primary:
        'bg-gray-900 text-white hover:bg-gray-800 ' +
        // lift + shadow on hover (without blue glow)
        'hover:shadow-lg hover:-translate-y-[2px] ' +
        // dark mode solid
        'dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100',
      secondary:
        'bg-gray-100 text-gray-900 hover:bg-gray-200 ' +
        'hover:shadow-md hover:-translate-y-[2px] ' +
        'dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700',
      outline:
        'border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white ' +
        'hover:shadow-md hover:-translate-y-[2px] ' +
        'dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900',
      ghost:
        'text-gray-700 hover:bg-gray-100 hover:shadow-sm hover:-translate-y-[1px] ' +
        'dark:text-gray-300 dark:hover:bg-gray-800',
    };

    const sizes: Record<ButtonSize, string> = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const classes = cn(base, variants[variant], sizes[size], className);

    // Link-as-button
    if (href) {
      return (
        <motion.a
          href={href}
          whileHover={!disabled ? { scale: 1.02, y: -2, transition: { duration: 0.1 } } : {}}
          whileTap={!disabled ? { scale: 0.98, y: 0, transition: { duration: 0.1 } } : {}}
          className={classes}
          {...props}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref}
        whileHover={!disabled ? { scale: 1.02, y: -2, transition: { duration: 0.1 } } : {}}
        whileTap={!disabled ? { scale: 0.98, y: 0, transition: { duration: 0.1 } } : {}}
        className={classes}
        onClick={onClick}
        disabled={disabled}
        type={type}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;