import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from "react-redux"

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
// export const StoreContext = createContext();
// console.log("Store Context", StoreContext);

// OWN CLASS PROVIDER
// class Provider extends React.Component {
//   render() {
//     const { store } = this.props;
//     return <StoreContext.Provider value={store}>
//       {this.props.children}
//     </StoreContext.Provider>
//   }
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// CONNECT FUNCTION FOR STORE AS PROPS
// export function connect(callback) {
//   return function (Component) {
//     class ConnectedComponent extends React.Component {
//       constructor(props) {
//         super(props);
//         this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
//       }

//       componentWillUnmount() {
//         this.unsubscribe();
//       }

//       render() {
//         const { store } = this.props;
//         const state = store.getState();
//         const dataToBePassedAsProps = callback(state);
//         return <Component
//           {...dataToBePassedAsProps}
//           dispatch={store.dispatch} />
//       }
//     }

//     class ConnectedComponentWrapper extends React.Component {
//       render() {
//         return (
//           <StoreContext.Consumer>
//             {(store) => <ConnectedComponent store={store} />}
//           </StoreContext.Consumer>
//         );
//       }
//     };
//     return ConnectedComponentWrapper;
//   }
// }

reportWebVitals();