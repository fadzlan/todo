import React from 'react';
import { Container } from 'react-bootstrap';
import { LatestCreatedTasks } from '../components/cards/latestCreatedTasks';

export default {
  title: 'Cards/Latest Created Task',
  component: LatestCreatedTasks,
};

const Template = (args) => {
  return <> 
    <Container>
      <LatestCreatedTasks
         {...args} />
    </Container>
  </>;
};

const tasks = [
  {
    "id": 1,
    "name": "Do stuff",
    "completed": false,
    "author": {
      "id": 1,
      "name": "Fadzlan"
    }
  },
  {
    "id": 2,
    "name": "Do more stuff",
    "completed": true,
    "author": {
      "id": 1,
      "name": "Fadzlan"
    }
  },
  {
    "id": 3,
    "name": "Did that didn't I?",
    "completed": true,
    "author": {
      "id": 1,
      "name": "Fadzlan"
    }
  },
  {
    "id": 4,
    "name": "What did I do last summer?",
    "completed": false,
    "author": {
      "id": 1,
      "name": "Fadzlan"
    }
  }
];

export const LatestCreatedTasksCard = Template.bind({});
LatestCreatedTasksCard.args = {
  tasks
};
