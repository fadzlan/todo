import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const TaskCompleted = (props) => {
  return <Card text="center">
    <Card.Header as="h5">Task Completed</Card.Header>
    <Card.Body>
          <span style={{fontSize: "50px", color: "#0034FF"}}>{props.pending}</span>/{props.total}
    </Card.Body>
  </Card>
};

TaskCompleted.propTypes = {
  pending: PropTypes.number,
  total: PropTypes.number
};