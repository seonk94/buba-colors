import React from 'react';
import styled, { ThemeProvider, css } from 'styled-components';
import * as Color from '../../constants/Color';

type HeadingProps = {
  children: React.ReactNode;
}

const defaultStyle = css`
  margin: 0px;
`

const Header1 = styled.h1`
  font-size: 3.6em;
  ${defaultStyle}
`

const Header2 = styled.h2`
  font-size: 2.8em;
  ${defaultStyle}
`

const Header3 = styled.h3`
  font-size: 1.825em;
  line-height: 1.4;
  ${defaultStyle}
`

const Header4 = styled.h4`
  font-size: 1.6em;
  line-height: 1.2em;
  ${defaultStyle}
`

const Header5 = styled.h5`
  font-size: 1.35em;
  line-height: 1.4em;
  ${defaultStyle}
`

const Header6 = styled.h6`
  line-height: 1.5em;
  font-size: 0.9em;
  font-weight: 600;
  ${defaultStyle}
`

const Paragraph = styled.p`
  font-size: 15px;
  line-height: 1.5em;
  ${defaultStyle}
`

export function H1({ children }: HeadingProps) {
  return (
    <Header1>
      {children}
    </Header1>
  )
}
export function H2({ children }: HeadingProps) {
  return (
    <Header2>
      {children}
    </Header2>
  )
}
export function H3({ children }: HeadingProps) {
  return (
    <Header3>
      {children}
    </Header3>
  )
}
export function H4({ children }: HeadingProps) {
  return (
    <Header4>
      {children}
    </Header4>
  )
}
export function H5({ children }: HeadingProps) {
  return (
    <Header5>
      {children}
    </Header5>
  )
}
export function H6({ children }: HeadingProps) {
  return (
    <Header6>
      {children}
    </Header6>
  )
}

export function P({ children }: HeadingProps) {
  return (
    <Paragraph>
      {children}
    </Paragraph>
  )
}
