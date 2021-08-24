import React from 'react';
import { Container } from 'react-bootstrap';
import { NoTask } from '../components/cards/noTask';

export default {
  title: 'Cards/No Task',
  component: NoTask,
};

const Template = (args) => {
  return <> 
    <Container>
      <NoTask {...args} />
    </Container>
  </>;
};

export const NoTaskCard = Template.bind({});
NoTaskCard.args = {
  onClick: function() {
    console.log("Clicked!");
  }
};
