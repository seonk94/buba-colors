import React from 'react';
import Button from './Button'

export default {
  title: 'components|basic/Button',
  component: Button,
}

export const primaryButton = () => <div>
  <Button theme='primary'>button</Button>
  <Button theme='primary' outlined>button</Button>
</div>;
export const secondaryButton = () => <div>
  <Button theme='secondary'>button</Button>
  <Button theme='secondary' outlined>button</Button>
</div>;
