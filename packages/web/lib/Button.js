import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { tokens } from '@pratik-ds/foundation';
import styled from 'styled-components';
const ButtonStyled = styled.button `
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
  background-color: ${(props) => tokens.colors[props.color][500].value};
  &:hover {
    background-color: ${(props) => tokens.colors[props.color][700].value};
  }
  &:active {
    background-color: ${(props) => tokens.colors[props.color][800].value};
  }
`;
const Button = forwardRef(({ disabled, color = 'primary', loading, ...rest }, ref) => {
    return (_jsx(ButtonStyled, { ref: ref, ...rest, color: color, disabled: disabled || loading }));
});
Button.displayName = 'Button';
export default Button;
//# sourceMappingURL=Button.js.map