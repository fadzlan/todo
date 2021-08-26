import React, { useState } from 'react';
import { Login } from '../components/cards/login';
import PropTypes from 'prop-types';

export const LoginContainer = (props) => {

  const loginUser = ({id, name}) => {
    console.log(`id is ${id}`);
    fetch(`/api/users/${id}/${name}`)
      .then(response => response.json())
      .then(data => {
        props.setLoggedInUser(data);
        return data;
      }).then(data =>{
        fetch(`/api/tasks/?authorId=${id}`)
          .then(response => response.json())
          .then(data => {
            props.setTasks(data);
          });
      });
  };

  return <Login loginUser={loginUser}
  />
};

LoginContainer.propTypes = {
  setLoggedInUser: PropTypes.func
};