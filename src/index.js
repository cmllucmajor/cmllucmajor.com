import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ES modules
import ReactDOMServer from 'react-dom/server';

const element = <React.StrictMode>
  <App />
</React.StrictMode>
ReactDOM.render(
  element,
  document.getElementById('root')
  );
  console.log(ReactDOMServer.renderToString(element))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
