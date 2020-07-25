import React from 'react';
import Button from './Button'
import { H3, H4 } from '../Heading/Heading';

export default {
  title: 'components|basic/Button',
  component: Button,
}

export const buttonStory = () => <div>
  <H3>Primary Button</H3>
  <Button theme='primary'>button</Button>
  <Button theme='primary' outlined>button</Button>
  <Button theme='primary' flat>button</Button>
  <H4>Button Size</H4>
  <Button theme='primary' big>button</Button>
  <Button theme='primary' >button</Button>
  <Button theme='primary' small>button</Button>
  <H3>Sceondary Button</H3>
  <Button theme='secondary'>button</Button>
  <Button theme='secondary' outlined>button</Button>
  <Button theme='secondary' flat>button</Button>
  <H4>Button Size</H4>
  <Button theme='secondary' big>button</Button>
  <Button theme='secondary' >button</Button>
  <Button theme='secondary' small>button</Button>
</div>;
