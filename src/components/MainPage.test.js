import React from 'react';

import { shallow } from 'enzyme';
import App from '../containers/App';

it('expect to render App component', () => {
  const mockStore = {
    robots: [],
    searchField: ''
  };
  expect(shallow(<App store={mockStore} />).debug()).toMatchSnapshot();
});
