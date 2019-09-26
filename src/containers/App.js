import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import './App.css';

import List from '../components/List';
import Search from '../components/Search';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import { setSearchField } from '../actions';

const mapStateToProps = state => ({
  searchField: state.searchField
});

const mapDispatchToProps = dispatch => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value))
});

const App = ({ searchField, onSearchChange }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setData(users))
  }, []);

  const filteredRobots = data.filter(item => item.name.toLowerCase().includes(searchField.toLowerCase()));

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
  
  return !data.length ? loadingDOM : contentDOM;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);