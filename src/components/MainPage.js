import React, { Component } from 'react';

import Header from './Header';
import List from './List';
import Search from './Search';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filteredRobots = () => {
    const { searchField, robots } = this.props;

    return robots.filter(item =>
      item.name.toLowerCase().includes(searchField.toLowerCase())
    );
  };

  render() {
    const { isPending, onSearchChange } = this.props;

    const loadingDOM = <h1 className='tc'>Loading...</h1>;
    const contentDOM = (
      <div className='tc'>
        <Header />
        <Search searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <List data={this.filteredRobots()} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );

    return isPending ? loadingDOM : contentDOM;
  }
}

export default MainPage;
