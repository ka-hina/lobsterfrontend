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
import { getOccurences } from "./actions/occurence.actions";
import { getPolarites } from "./actions/polarite.actions";
import { getTweetes } from "./actions/tweets.actions";
const mongoosePaginate = require('mongoose-paginate-v2');


// Dans votre code de configuration, vous pouvez ajouter cette ligne
mongoosePaginate.paginate.options = { pagination: false };

// dev tools
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

//store.dispatch(getUsers());
store.dispatch(getNodes());
store.dispatch(getTrends());
store.dispatch(getOccurences());
store.dispatch(getPolarites());
store.dispatch(getTweetes());

ReactDOM.render(
  <Provider store={store}>
    
    <App />
  </Provider>,
  document.getElementById("root")
);
