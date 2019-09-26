import React, { Component } from 'react';

import { connect } from 'react-redux';

import './App.css';

import List from '../components/List';
import Search from '../components/Search';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import { setSearchField, setRequestRobots } from '../actions';

const mapStateToProps = state => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error
});

const mapDispatchToProps = dispatch => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(setRequestRobots())
});

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  };

  
  render() {
    const { searchField, robots, isPending, onSearchChange } = this.props;
    
    const filteredRobots = robots.filter(item => item.name.toLowerCase().includes(searchField.toLowerCase()));

    const loadingDOM = (<h1 className='tc'>Loading...</h1>);
    const contentDOM = (<div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <Search searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <List data={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>);

    return isPending ? loadingDOM : contentDOM;
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(App);