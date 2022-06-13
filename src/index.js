import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';

import App from './components/App';
import './index.css';
import movies from './reducers';

const store = createStore(movies);
console.log(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);

reportWebVitals();