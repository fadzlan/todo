import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Chart } from "react-google-charts";

export const CompletionChart = (props) => {
  const completed = props.tasks.reduce((sum, item) => {
    if(item.completed) return sum + 1;
    else return sum;
  },0);
  const pending = props.tasks.length - completed;
  return <Card style={{ alignItems: 'center', justifyContent: 'center' }}>
    <Card.Body>

      <Chart
        
        width={'500px'}
        height={'300px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Task', 'Completed'],
          ['Completed', completed],
          ['Pending', pending]
        ]}
        options={{
          title: '',
          legend: 'none'
        }}
      />
    </Card.Body>
  </Card>
};

CompletionChart.propTypes = {
  tasks: PropTypes.array
};