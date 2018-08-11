/* eslint-disable react/jsx-filename-extension */
import 'rxjs';

import React from 'react';
import { createEpicMiddleware } from 'redux-observable';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import rootReducer from './reducer.root';
import rootEpic from './epic.root';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// store initial state
const initialState = {};
const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
