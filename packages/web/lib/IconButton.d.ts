import React from 'react';
interface IconButtonProps extends React.ComponentProps<'button'> {
    /** If button is in disabled state */
    disabled?: boolean;
    /** Loading state */
    loading?: boolean;
    /** Aria title should be mandatory for icon buttons */
    'aria-label'?: string;
}
declare const IconButton: React.ForwardRefExoticComponent<Omit<IconButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export default IconButton;
