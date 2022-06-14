import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import './index.css';
import rootReducer from './reducers';

// MIDDLEWARE 
const logger = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action !== 'function')
    console.log("ACTION_TYPE:", action.type);

  next(action);
};

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
console.log(store);
console.log("state:", store.getState());

// CONTEXT CREATION
export const StoreContext = createContext();
console.log("Store Context", StoreContext);

// OWN CLASS PROVIDER
class Provider extends React.Component {
  render() {
    const { store } = this.props;
    return <StoreContext.Provider value={store}>
      {this.props.children}
    </StoreContext.Provider>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();