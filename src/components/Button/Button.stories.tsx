import React from 'react';
import Button from './Button'

export default {
  title: 'components|basic/Button',
  component: Button,
}

export const primaryButton = () => <Button theme='primary'>button</Button>;
export const secondaryButton = () => <Button theme='secondary'>button</Button>;
