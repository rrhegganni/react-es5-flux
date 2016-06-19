import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOMServer from 'react-dom/server';
import {App} from './components/app';

const server = () => ReactDOMServer.renderToString(
  <App />
);

export {server};
