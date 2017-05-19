import React from 'react';
import {logging} from 'react-server';

const logger = logging.getLogger(__LOGGER__);

export default class DayTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {daysElapsed: 0};
    this.addDay = this.addDay.bind(this);
    this.zero = this.zero.bind(this);
  }

  addDay() {
    this.setState((prevState) => ({
      daysElapsed: prevState.daysElapsed + 1
    }));
  }

  zero() {
    this.setState({daysElapsed: 0});
  }

  render() {
    return (
      <div className='row'>
        <h1 className='days col-sm-offset-4 col-sm-4'>{this.state.daysElapsed}</h1>
        <button className='btn btn-default col-sm-offset-5 col-sm-2' onClick={this.addDay}>another day!</button>
        <button className='btn btn-default col-sm-offset-5 col-sm-2' onClick={this.zero}>zero out :(</button>
      </div>
    );
  }
}

