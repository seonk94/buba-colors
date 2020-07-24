import React from 'react';
import Button from './Button'

export default {
  title: 'components|basic/Button',
  component: Button,
}

export const buttonStory = () => <div>
  <h3>Primary Button</h3>
  <Button theme='primary'>button</Button>
  <Button theme='primary' outlined>button</Button>
  <Button theme='primary' flat>button</Button>
  <h4>Button Size</h4>
  <Button theme='primary' big>button</Button>
  <Button theme='primary' >button</Button>
  <Button theme='primary' small>button</Button>
  <h3>Sceondary Button</h3>
  <Button theme='secondary'>button</Button>
  <Button theme='secondary' outlined>button</Button>
  <Button theme='secondary' flat>button</Button>
  <h4>Button Size</h4>
  <Button theme='secondary' big>button</Button>
  <Button theme='secondary' >button</Button>
  <Button theme='secondary' small>button</Button>
</div>;
