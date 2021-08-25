import React from 'react';
import { Container } from 'react-bootstrap';
import { Header } from '../components/panel/header';

export default {
  title: 'Layout/Header',
  component: Header,
};

const Template = (args) => {
  return <>
    <Container>
      <Header {...args} />
    </Container>
  </>;
};

export const BasicHeader = Template.bind({});
BasicHeader.args = {
  logoutClick: function() {
    console.log("clicked logout")
  }
};
