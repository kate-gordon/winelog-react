import React from 'react';
import { storiesOf } from '@storybook/react';
import Form from './Form'; 

storiesOf('Form', module)
  .add('Login', () => (
    <Form>
      <h1>Login Form!</h1>
    </Form>
  ))
  .add('Signup', () => (
    <Form>
      <h1>Signup Form!</h1>
    </Form>
));

