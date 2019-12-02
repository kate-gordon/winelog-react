import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button'; 
storiesOf('Button', module)
  .add('Black', () => (
    <Button>
      <span role="img" aria-label="without-milk">
         🏿
      </span>
    </Button>
  ))
  .add('White', () => (
    <Button>
      <span role="img" aria-label="with-milk">
        🏼
      </span>
    </Button>
));