import React, { useState } from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { LoginContainer } from './containers/LoginContainer';
import { Layout } from './containers/Layout';

function App() {
  let [loggedInUser, setLoggedInUser] = useState('');
  let [tasks, setTasks] = useState(null);
  return (
    <>
      {!loggedInUser ? <Container>
        <Row className="d-flex align-items-center">
          <Col xs={1} md={3}></Col>
          <Col xs={10} md={6} >
            <LoginContainer setLoggedInUser={setLoggedInUser} setTasks={setTasks}/>
          </Col>
          <Col xs={1} md={3}></Col>
        </Row>
      </Container> : <Layout 
        loggedInUser={loggedInUser}
        tasks={tasks}
        setTasks={setTasks}
        setLoggedInUser={setLoggedInUser}
      />}
      
    </>
  );
}


export default App;
