import React, { forwardRef } from 'react';

export interface ButtonProps extends React.ComponentProps<'button'> {
  /** If button is in disabled state */
  disabled?: boolean;
  /** Loading state */
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ disabled, loading, ...rest }, ref) => {
    return (
      <button
        className={[
          'pratik-bg-primary-500 hover:pratik-bg-primary-700',
          'active:pratik-bg-primary-800 pratik-text-neutral-white',
          'pratik-py-8 pratik-px-[20px]',
          'pratik-rounded-large pratik-border-primary-900 pratik-border-2',
        ].join(' ')}
        {...rest}
        ref={ref}
        disabled={disabled || loading}
      />
    );
  },
);

Button.displayName = 'ButtonTailwind';

export default Button;
