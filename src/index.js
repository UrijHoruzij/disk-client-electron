import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from 'styled-components';
import theme from 'ui-nature/dist/theme';
import 'ui-nature/dist/main.css';

import App from './App';
import { authActions } from "./redux/actions";
import store from "./redux/store";
store.dispatch(authActions.refresh())

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);