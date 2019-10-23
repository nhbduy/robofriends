import React from 'react';

import { shallow } from 'enzyme';
import List from './List';

it('expect to render List component', () => {
  const mockRobots = [
    { id: 1, name: 'John', username: 'john', email: 'john@gmail.com' }
  ];

  expect(shallow(<List data={mockRobots} />).debug()).toMatchSnapshot();
});
