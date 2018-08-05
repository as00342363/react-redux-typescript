import App from './App';
import './index.css';
import AppReducer from "./reducers/AppReducer";
import * as React from 'react';
import * as ReactDOM from 'react-dom'; 
import registerServiceWorker from './registerServiceWorker'; 
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(AppReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
