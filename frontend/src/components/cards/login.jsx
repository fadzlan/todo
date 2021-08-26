import React, { useState } from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const Login = (props) => {
  let [name, setName] = useState('');
  let [id, setId] = useState('');
  return <Card text="center">
    <Card.Header as="h5">Login</Card.Header>
    <Card.Body>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control type="text" name="id" placeholder="Id" onChange={setId} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Control type="text" name="name" placeholder="Name" onChange={setName} />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="primary" size="lg" onClick={() => {props.loginUser({id: id?.target?.value, name: name?.target?.value})} }>Login</Button>
        </div>
      </Form>
    </Card.Body>
  </Card>
};

Login.propTypes = {
  loginUser: PropTypes.func
};