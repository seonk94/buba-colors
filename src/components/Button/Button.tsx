import React from 'react';
import styled, { ThemeProvider, css } from 'styled-components';
import * as Color from '../../constants/Color';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  theme: 'primary' | 'secondary';
}

const BasicButton = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  font-weight: 700;
  color: white;

  /* Color the border and text with theme.main */
  border: 1px solid ${(props: ButtonProps) => Color[props.theme].main};
  background: ${(props: ButtonProps) => Color[props.theme].main};

  &:hover {
    cursor: pointer;
    background: ${(props: ButtonProps) => Color[props.theme].light};
  }

  &:active {
    background: ${(props: ButtonProps) => Color[props.theme].dark};
  }
`

BasicButton.defaultProps = {
  theme: 'primary'
}


function Button({ children, onClick, theme }: ButtonProps) {
  return (
    <BasicButton onClick={onClick} theme={theme}>
      {children}
    </BasicButton>
  )
}

export default Button;
