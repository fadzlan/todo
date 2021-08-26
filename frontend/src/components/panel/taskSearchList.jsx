import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, FormControl, Row, InputGroup, Button, ListGroup, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const TaskSearchList = (props) => {
  const [searchText, setSearchText] = useState('');
  let tasks = props.tasks;
  let checkedList = tasks?.map((item) => item.completed);

  const [checkedState, setCheckedState] = useState(checkedList);

  const handleOnChange = async (position) => {
    console.log(`orig ${tasks[position].completed}`);
    tasks[position].completed = !tasks[position].completed;
    console.log(`assigned ${tasks[position].completed}`);
    console.log(`assigned everything ${JSON.stringify(tasks[position])}`);
    console.log(`tasks[position].completed ${tasks[position].completed}`)
    console.log(`!tasks[position].completed ${!tasks[position].completed}`)
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
    console.log(`On component ${JSON.stringify(tasks[position])}`);
    if(props.toggleCompleted) await props.toggleCompleted(position, tasks[position]);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      props.onSearchClick(searchText?.target?.value);
    }
  }

  return <div>
    <Row>
      <Col md={5} xs={12} className="text-start"><h5>Tasks</h5></Col>
      <Col md={5} xs={9} className="">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search Tasks"
            aria-label="Search Tasks"
            aria-describedby="searchInput"
            name="searchText"
            onChange={setSearchText}
            onKeyDown={handleKeyDown}
          />
          <Button id="searchInput" variant="light" onClick={() => {
            props.onSearchClick(searchText?.target?.value)
          }}>
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </InputGroup>
      </Col>
      <Col className="float-end" md={2} xs={3}>
        <Button variant="primary" onClick={props.onClickNewTask}>
          + New Task
        </Button>
      </Col>
    </Row>
    <Row>
      <Col>
      <Form>
        <ListGroup>
          {tasks?.map((item, index) => {
            return <ListGroup.Item>
              <Form.Check 
                type="checkbox" 
                id={item.id} 
                label={item.name} 
                checked={checkedState[index]} 
                onChange={() => handleOnChange(index)}/></ListGroup.Item>
          })}
        </ListGroup>
      </Form>
      </Col>
    </Row>
  </div>
};

TaskSearchList.propTypes = {
  onSearchClick: PropTypes.func,
  onClickNewTask: PropTypes.func,
  tasks: PropTypes.array,
  toggleCompleted: PropTypes.func
};