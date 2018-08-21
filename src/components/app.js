import React, { Component } from 'react';
import TrainTimes from './trainTimes'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Where my train at?</h1>
        <TrainTimes />
      </div>
    );
  }
}
