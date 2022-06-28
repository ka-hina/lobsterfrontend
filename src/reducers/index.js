import { combineReducers } from 'redux';
//import usersReducer from './users.reducer';
import nodesReducer from './nodes.reducer';
import trendsReducer from './trends.reducer'


export default combineReducers({
    //usersReducer,
    nodesReducer,
    trendsReducer
});