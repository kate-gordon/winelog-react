import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from './Box'; 

storiesOf('Box', module)
  .add('Empty', () => (
   <Box /> 
  ));
