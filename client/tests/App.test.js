import test from 'ava';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { IntlProvider } from 'react-intl';
import App from './../App';
import rootReducer from './../reducers';

const messages = {};
test('should render the application', t => {
  const div = document.createElement('div');
  ReactDOM.render(<App source="test" />, div);
  ReactDOM.unmountComponentAtNode(div);
  t.pass();
});

test('should render the application with language', t => {
  const div = document.createElement('div');
  // change the language
  Object.defineProperty(navigator, 'language', {
    get: function() {
      return 'somelang';
    }
  });
  ReactDOM.render(<App source="test" />, div);
  ReactDOM.unmountComponentAtNode(div);
  t.pass();
});
