import React from 'react';

import { shallow } from 'enzyme';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  };

  wrapper = shallow(<MainPage {...mockProps} />);
});

it('expect to render MainPage component', () => {
  expect(wrapper.debug()).toMatchSnapshot();
});

it('filters robots correctly', () => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz'
      }
    ],
    searchField: 'John',
    isPending: false
  };

  wrapper = shallow(<MainPage {...mockProps} />);
  expect(wrapper.instance().filteredRobots()).toEqual([]);
});

it('filters robots correctly 2', () => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz'
      }
    ],
    searchField: 'Leanne',
    isPending: false
  };

  const filteredResult = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz'
    }
  ];

  wrapper = shallow(<MainPage {...mockProps} />);
  expect(wrapper.instance().filteredRobots()).toEqual(filteredResult);
});
