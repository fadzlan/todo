import React, { useState } from 'react';
import { Login } from '../components/cards/login';
import PropTypes from 'prop-types';

export const LoginContainer = (props) => {

  const loginUser = ({id, name}) => {
    fetch(`/api/users/${id}/${name}`)
      .then(response => response.json())
      .then(data => {
        props.setLoggedInUser(data);
      });
  };

  return <Login loginUser={loginUser}
  />
};

LoginContainer.propTypes = {
  loggedInUser: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  })
};