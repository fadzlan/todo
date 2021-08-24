import React from 'react';
import { Container } from 'react-bootstrap';
import { NewTask } from '../components/cards/newTask';

export default {
  title: 'Cards/New Task',
  component: NewTask,
};

const Template = (args) => {
  return <> 
    <Container>
      <NewTask {...args} />
    </Container>
  </>;
};

export const NewTaskCard = Template.bind({});
NewTaskCard.args = {
  createNewTask: function({taskName}) {
    console.log(taskName);
  }
};
