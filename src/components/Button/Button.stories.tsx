import React from 'react';
import Button from './Button'
import { H3, H4 } from '../Heading/Heading';

export default {
  title: 'components|basic/Button',
  component: Button,
}

export const buttonStory = () => <div>
  <H3>Primary Button</H3>
  <Button theme='primary'>default</Button>
  <Button theme='primary' outlined>outlined</Button>
  <Button theme='primary' flat>flat</Button>
  <Button theme='primary' disabled>disabled</Button>
  <H4>Button Size</H4>
  <Button theme='primary' big>big</Button>
  <Button theme='primary' >default</Button>
  <Button theme='primary' small>small</Button>
  <H3>Sceondary Button</H3>
  <Button theme='secondary'>default</Button>
  <Button theme='secondary' outlined>outlined</Button>
  <Button theme='secondary' flat>flat</Button>
  <Button theme='secondary' disabled>disabled</Button>
  <H4>Button Size</H4>
  <Button theme='secondary' big>big</Button>
  <Button theme='secondary' >default</Button>
  <Button theme='secondary' small>small</Button>
</div>;
