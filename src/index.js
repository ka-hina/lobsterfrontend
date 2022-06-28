import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
//import { getUsers } from "./actions/users.actions";
import { getNodes } from "./actions/nodes.actions";
import { getTrends } from "./actions/trends.actions";

// dev tools
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

//store.dispatch(getUsers());
store.dispatch(getNodes());
store.dispatch(getTrends());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
