import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const renderReactApp = (renderToElement, flags) =>
  ReactDOM.render(<App {...flags} />, renderToElement);
window.renderReactApp = renderReactApp;
