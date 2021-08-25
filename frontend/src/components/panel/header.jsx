import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Image, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

export const Header = (props) => {

  console.log(props);
  return <Nav>
    <Nav className="me-auto">
    <Nav.Item>
      <Nav.Link href="/home">
        <Image src="https://picsum.photos/40/40" style={{width: 40, height: 40, borderRadius: 400/ 2}}/>
      </Nav.Link>
    </Nav.Item>
    </Nav>
    <Nav className="ms-auto">
    <Nav.Item className="me-auto">
      <Nav.Link>
        <Button variant="outline-primary" onClick={props.logoutClick}>Logout</Button>
      </Nav.Link>
    </Nav.Item>
    </Nav>
  </Nav >
};

Header.propTypes = {
  logoutClick: PropTypes.func
};