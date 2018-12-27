import React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from './../../reducers';
import { ThemeProvider, generateTheme } from './../../styles/Theme';

const enTranslationData = require('./../../translations/en.json');

function providerWithParams(component) {
  const store = createStore(rootReducer);
  const jsx = (
    <Provider store={store}>
      <IntlProvider locale="en" messages={enTranslationData}>
        <ThemeProvider theme={generateTheme()}>
          <HashRouter>{React.cloneElement(component)}</HashRouter>
        </ThemeProvider>
      </IntlProvider>
    </Provider>
  );
  return {
    jsx,
    store,
    enTranslationData,
    theme: generateTheme()
  };
}

export default providerWithParams;
