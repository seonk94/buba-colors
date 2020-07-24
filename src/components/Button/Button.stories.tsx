import React from 'react';
import Button from './Button'

export default {
  title: 'components|basic/Button',
  component: Button,
}

export const buttonStory = () => <div>
  <h5>Primary Button</h5>
  <Button theme='primary'>button</Button>
  <Button theme='primary' outlined>button</Button>
  <Button theme='primary' flat>button</Button>
  <h5>Sceondary Button</h5>
  <Button theme='secondary'>button</Button>
  <Button theme='secondary' outlined>button</Button>
  <Button theme='secondary' flat>button</Button>
</div>;
