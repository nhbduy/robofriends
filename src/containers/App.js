import React, { Component } from 'react';

import { connect } from 'react-redux';

import './App.css';

import MainPage from '../components/MainPage';

import { setSearchField, setRequestRobots } from '../actions';

const mapStateToProps = state => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error
});

const mapDispatchToProps = dispatch => ({
  onSearchChange: event => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(setRequestRobots())
});

class App extends Component {
  render() {
    return <MainPage {...this.props} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
