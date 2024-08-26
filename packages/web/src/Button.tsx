import { forwardRef } from 'react';
import React from 'react';
import { tokens } from '@pratik-ds/foundation';
import styled from 'styled-components';

export interface ButtonProps extends React.ComponentProps<'button'> {
  /** If button is in disabled state */
  disabled?: boolean;
  /** Loading state */
  loading?: boolean;
  color?: keyof typeof tokens.colors;
}

const ButtonStyled = styled.button<ButtonProps>`
  all: unset;
  cursor: pointer;
  padding: 8px 20px;
  &:disabled {
    opacity: 40%;
  }
  background-radius: ${tokens.radius.large.value};

  transition: ${tokens.animations.default.value};
  color: ${tokens.colors.neutral.white.value};
  border-radius: ${tokens.radius.large.value};
  background-color: ${(props) =>
    tokens.colors[props.color as keyof typeof tokens.colors][500].value};
  &:hover {
    background-color: ${(props) =>
      tokens.colors[props.color as keyof typeof tokens.colors][700].value};
  }
  &:active {
    background-color: ${(props: any) =>
      tokens.colors[props.color as keyof typeof tokens.colors][800].value};
  }
`;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ disabled, color = 'primary', loading, ...rest }, ref) => {
    return (
      <ButtonStyled
        ref={ref}
        {...rest}
        color={color}
        disabled={disabled || loading}
      />
    );
  },
);

Button.displayName = 'Button';

export default Button;
