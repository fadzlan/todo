import React from 'react';
import { Login } from '../components/cards/login';
import { Container } from 'react-bootstrap';

export default {
  title: 'Cards/Login',
  component: Login,
};

const Template = (args) => {
  return <> 
    <Container>
      <Login {...args} />
    </Container>
  </>;
};

export const LoginCard = Template.bind({});
LoginCard.args = {
  loginUser: function({id, name}) {
    console.log(id);
    console.log(name);
  }
};
