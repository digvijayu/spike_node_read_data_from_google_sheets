import test from 'ava';
import { initialAppState, appReducer } from './../../reducers';
import { appError } from './../../actions';

test('should verify the initial state', t => {
  let expected = {
    error: {
      message: ''
    },
    serverUrl: window.location.origin
  };
  t.deepEqual(initialAppState, expected);
});

test('should reduce the application error action', t => {
  const newState = appReducer();
  t.deepEqual(newState, {
    error: {
      message: ''
    },
    serverUrl: 'null'
  });
});

test('should reduce the application error action with custom state', t => {
  const newState = appReducer(
    {
      error: {
        message: 'Some'
      },
      serverUrl: window.location.origin
    },
    appError('Some Message 1')
  );
  t.deepEqual(newState, {
    error: {
      message: 'Some Message 1'
    },
    serverUrl: window.location.origin
  });
});
