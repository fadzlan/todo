import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const NoTask = (props) => {
  return <Card text="center">
    <Card.Header as="h5">You have no task.</Card.Header>
    <Card.Body>
        <div className="d-grid gap-2">
          <Button variant="primary" size="lg" onClick={props.onClick}>+ New Task</Button>
        </div>
    </Card.Body>
  </Card>
};

NoTask.propTypes = {
  onClick: PropTypes.func
};