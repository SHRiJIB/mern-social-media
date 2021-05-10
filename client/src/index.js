import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import App from "./App";
import reducers from "./redux/reducers";

const store = createStore(reducers, applyMiddleware(compose(thunk)));
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
