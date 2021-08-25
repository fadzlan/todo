import React from 'react';
import { Container } from 'react-bootstrap';
import { TaskCompleted } from '../components/cards/taskCompleted';

export default {
  title: 'Cards/Task Completed',
  component: TaskCompleted,
};

const Template = (args) => {
  return <> 
    <Container>
      <TaskCompleted
         {...args} />
    </Container>
  </>;
};

export const TaskCompletedCard = Template.bind({});
TaskCompletedCard.args = {
  pending: 5,
  total: 20
};
