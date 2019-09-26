import React, { useState, useEffect } from 'react';

import './App.css';

import List from '../components/List';
import Search from '../components/Search';
import Scroll from '../components/Scroll';

const App = () => {
  const [data, setData] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setData(users))
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  }

  const filteredRobots = data.filter(item => item.name.toLowerCase().includes(searchField.toLowerCase()));

  const loadingDOM = (<h1 className='tc'>Loading...</h1>);
  const contentDOM = (<div className='tc'>
    <h1 className='f1'>RoboFriends</h1>
    <Search searchChange={onSearchChange} />
    <Scroll>
      <List data={filteredRobots} />
    </Scroll>
  </div>);
  
  return !data.length ? loadingDOM : contentDOM;
}

export default App;