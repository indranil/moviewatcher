import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './redux/reducers/rootReducer';

import './styles/index.css';

import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

let store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
