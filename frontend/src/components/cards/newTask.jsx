import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const NewTask = (props) => {
  let [taskName, setTaskName] = useState('');
  return <Card text="center">
    <Card.Header as="h5">+ New Task</Card.Header>
    <Card.Body>
      <Form>
        <Form.Group className="mb-3" >
          <Form.Control type="text" name="taskName" placeholder="Task Name" onChange={setTaskName} />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="primary" size="lg" onClick={() => {props.createNewTask({taskName: taskName?.target?.value})} }>+ New Task</Button>
        </div>
      </Form>
    </Card.Body>
  </Card>
};

NewTask.propTypes = {
  createNewTask: PropTypes.func
};