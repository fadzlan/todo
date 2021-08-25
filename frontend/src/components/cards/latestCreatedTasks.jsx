import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const LatestCreatedTasks = (props) => {
  const tasks = props.tasks.slice(0,3).sort((first, second) => {
    if(first.id > second.id) return -1;
    if(first.id < second.id) return 1;
    return 0;
  });
  
  return <Card text="center">
    <Card.Header as="h5">Task Completed</Card.Header>
    <Card.Body>
      <ul >
        {tasks.map((item) => {
          if(item.completed)
            return <li style={{ textDecoration: "line-through", margin: 0, padding: 0, textAlign: 'start' }}>{item.name}</li>
          else
            return <li style={{ margin: 0, padding: 0, textAlign: 'start' }}>{item.name}</li>
        })}
      </ul>
    </Card.Body>
  </Card>
};



LatestCreatedTasks.propTypes = {
  tasks: PropTypes.array
};