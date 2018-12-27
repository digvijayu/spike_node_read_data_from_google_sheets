import React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from './../../reducers';
import { ThemeProvider, generateTheme } from './../../styles/Theme';

const enTranslationData = require('./../../translations/en.json');

function providers(component) {
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <IntlProvider locale="en" messages={enTranslationData}>
        <ThemeProvider theme={generateTheme()}>
          <HashRouter>{React.cloneElement(component)}</HashRouter>
        </ThemeProvider>
      </IntlProvider>
    </Provider>
  );
}

export default providers;
