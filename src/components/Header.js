import React, { Component } from 'react';
import CounterButton from './CounterButton';
class Header extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <React.Fragment>
        <h1 className='f1'>RoboFriends</h1>
        <CounterButton />
      </React.Fragment>
    );
  }
}

export default Header;
