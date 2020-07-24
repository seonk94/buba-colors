import React from 'react';
import Button from './Button'

export default {
  title: 'components|basic/Button',
  component: Button,
}

export const primaryButton = () => <div>
  <Button theme='primary'>button</Button>
  <Button theme='primary' outlined>button</Button>
  <Button theme='primary' flat>button</Button>
</div>;
export const secondaryButton = () => <div>
  <Button theme='secondary'>button</Button>
  <Button theme='secondary' outlined>button</Button>
  <Button theme='secondary' flat>button</Button>
</div>;
