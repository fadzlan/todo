import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Login} from './components/cards/login';
import {Container, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { LoginContainer } from './containers/LoginContainer';
import { Header } from './components/panel/header';

function App() {
  // let loggedInUser = null;
  let [loggedInUser, setLoggedInUser] = useState('');
  
  // const setLoggedInUser = async (incomingUser) => {
  //   loggedInUser = incomingUser;
  //   console.log(`logged in user set to`);
  //   console.log(loggedInUser);
  // }

  return (
    <>
      {!loggedInUser ? <Container>
        <Row className="d-flex align-items-center">
          <Col xs={1} md={3}></Col>
          <Col xs={10} md={6} >
            <LoginContainer setLoggedInUser={setLoggedInUser}/>
          </Col>
          <Col xs={1} md={3}></Col>
        </Row>
      </Container> : <Header />}
      
    </>
  );
}


export default App;
