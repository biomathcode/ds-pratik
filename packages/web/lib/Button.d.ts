import React from 'react';
import { tokens } from '@pratik-ds/foundation';
export interface ButtonProps extends React.ComponentProps<'button'> {
    /** If button is in disabled state */
    disabled?: boolean;
    /** Loading state */
    loading?: boolean;
    color?: keyof typeof tokens.colors;
}
declare const Button: React.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export default Button;
