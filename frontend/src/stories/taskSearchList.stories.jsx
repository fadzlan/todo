import React from 'react';
import { Container } from 'react-bootstrap';
import { TaskSearchList } from '../components/panel/taskSearchList';


export default {
  title: 'Panels/Task Search List',
  component: TaskSearchList,
};

const Template = (args) => {
  return <> 
    <Container>
      <TaskSearchList
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

export const TaskSearchListCard = Template.bind({});
TaskSearchListCard.args = {
  onSearchClick: function(searchText) {
    console.log(`Searched ${searchText}`);
  },
  onClickNewTask: function() {
    console.log("Create new task");
  },
  tasks,
  toggleCompleted: async function(index, task) {
    console.log(index);
    console.log(`In stories ${JSON.stringify(task)}`);
    tasks[index].completed = !tasks[index].completed;
    console.log(`In stories after update ${JSON.stringify(task)}`);
  }
};
