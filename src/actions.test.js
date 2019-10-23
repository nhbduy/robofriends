import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

import * as actions from './actions';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

it('should create an action to search robots', () => {
  const text = 'hellooo';
  const expectedAction = {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  };

  expect(actions.setSearchField(text)).toEqual(expectedAction);
});

describe('handle async actions', () => {
  // it('handles requesting robots API', () => {
  //   const store = mockStore();
  //   store.dispatch(actions.setRequestRobots());
  //   const action = store.getActions();

  //   const expectedAction = {
  //     type: REQUEST_ROBOTS_PENDING
  //   };

  //   expect(action[0]).toEqual(expectedAction);
  // });

  it('handles requesting robots API pending & success', () => {
    const expectedAction = [
      { type: REQUEST_ROBOTS_PENDING },
      {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [{ id: 1, name: 'Leanne Graham' }]
      }
    ];

    const store = mockStore();
    store.dispatch(actions.setRequestRobots()).then(() => {
      const action = store.getActions();
      expect(action[0]).toEqual(expectedAction[0]);

      expect(action[1].type).toEqual(expectedAction[1].type);
      expect(action[1].payload[0]).toMatchObject({
        id: expectedAction[1].payload[0].id,
        name: expectedAction[1].payload[0].name
      });
    });
  });
});
