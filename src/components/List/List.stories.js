import React from 'react';
import { storiesOf } from '@storybook/react';
import List from './List'; 

storiesOf('List', module)
  .add('NavList', () => ( 
    <>
      <h1>NavBar List</h1>
      <List />
    </>
));