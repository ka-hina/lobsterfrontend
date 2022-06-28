import { combineReducers } from 'redux';
import usersReducer from './users.reducer';
import nodesReducer from './nodes.reducer';

export default combineReducers({
    //usersReducer,
    nodesReducer
});