import React from 'react';
import { storiesOf } from '@storybook/react';
import Navbar from './Navbar'; 

storiesOf('Navbar', module)
  .add('Home', () => (
    <Navbar>
        <h1> This is the Navbar </h1>
    </Navbar>
  ))
  ;