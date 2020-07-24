import React from 'react';
import styled, { ThemeProvider, css } from 'styled-components';
import * as Color from '../../constants/Color';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  outlined?: boolean;
  flat?: boolean;
  theme: 'primary' | 'secondary';
}

const defaultStyle = css`
  color: white;
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

const flatStyle = css`
  color: ${(props: ButtonProps) => Color[props.theme].main};
  background: white;
  border: none;

  &:hover{
    cursor: pointer;
    background: ${(props: ButtonProps) => Color[props.theme].light};
  }
  &:active {
    background: ${(props: ButtonProps) => Color[props.theme].main};
  }
`

const outlinedStyle = css`
  color: black;
  background: white;
  border: 1px solid ${(props: ButtonProps) => Color[props.theme].main};

  &:hover {
    cursor: pointer;
    background: ${(props: ButtonProps) => Color[props.theme].light};
  }

  &:active {
    background: ${(props: ButtonProps) => Color[props.theme].dark};
  }
`

const BasicButton = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  font-weight: 700;

  ${(props: ButtonProps) => !props.outlined && !props.flat ? defaultStyle : undefined}
  ${(props: ButtonProps) => props.outlined ? outlinedStyle : undefined}
  ${(props: ButtonProps) => props.flat ? flatStyle : undefined}
`

BasicButton.defaultProps = {
  theme: 'primary'
}


function Button({ children, onClick, theme, outlined, flat }: ButtonProps) {
  return (
    <BasicButton onClick={onClick} theme={theme} outlined={outlined} flat={flat}>
      {children}
    </BasicButton>
  )
}

export default Button;
