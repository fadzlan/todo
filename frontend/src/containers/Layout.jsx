import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col} from 'react-bootstrap';
import { Header } from '../components/panel/header';
import { TaskSearchList } from '../components/panel/taskSearchList';
import { NewTask } from '../components/cards/newTask';

export const Layout = (props) => {
  const [newTasksState, setNewTaskState] = useState(false);

  const onClickNewTask = (taskName) => {
    console.log({
      authorId: props.loggedInUser.id,
      name: taskName
    });
    setNewTaskState(true);
  };

  const createNewTask = (taskName) => {
    fetch(`/api/tasks/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        authorId: props.loggedInUser.id,
        name: taskName
      })
    }).then(response => response.json())
    .then(data => {
      setNewTaskState(false);
      fetch(`/api/tasks/?authorId=${props.loggedInUser.id}`)
        .then(response => response.json())
        .then(data => {
          props.setTasks(data);
        });
    });
  };

  const toggleCompleted = (position, task) => {
    fetch(`/api/tasks/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        completed: task.completed
      })
    }).then(response => response.json())
    .then(data => {
      setNewTaskState(false);
      fetch(`/api/tasks/?authorId=${props.loggedInUser.id}`)
        .then(response => response.json())
        .then(data => {
          props.setTasks(data);
        });
    });
  };

  const onSearchClick = (searchText) => {
    fetch(`/api/tasks/?authorId=${props.loggedInUser.id}&name=${searchText}`)
      .then(response => response.json())
      .then(data => {
        props.setTasks(data);
    });

  }
  
  return <Container>
    <Row><Header logoutClick={() => props.setLoggedInUser(null)}/></Row>
    {props.tasks && props.tasks.length > 0 && !newTasksState? 
      <Row><Col><TaskSearchList tasks={props.tasks} onClickNewTask={onClickNewTask} toggleCompleted={toggleCompleted} onSearchClick={onSearchClick}/></Col></Row> 
      : 
      <Row><NewTask createNewTask={createNewTask}/></Row>
    }
    <Row></Row>
  </Container>
};

Layout.propTypes = {
  loggedInUser: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  }),
  setTasks: PropTypes.func
};