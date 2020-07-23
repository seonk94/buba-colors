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

  /* Color the border and text with theme.main */
  border: 1px solid ${(props: ButtonProps) => Color[props.theme].main};
  ${(props: ButtonProps) => theme[props.theme]}
`

BasicButton.defaultProps = {
  theme: 'primary'
}

// Define what props.theme will look like
const theme = {
  primary: css`
    background: ${Color.primary.main};
    color: white;
    &:hover {
      background: ${Color.primary.light};
    }
    &:active {
      background: ${Color.primary.dark};
    }
  `,
  secondary: css`
    background: ${Color.secondary.main};
    color: white;
    &:hover {
      background: ${Color.secondary.light};
    }
    &:active {
      background: ${Color.secondary.dark};
    }
  `,
};

function Button({ children, onClick, theme }: ButtonProps) {
  return (
    <BasicButton onClick={onClick} theme={theme}>
      {children}
    </BasicButton>
  )
}

export default Button;
