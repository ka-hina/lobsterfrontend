import { combineReducers } from 'redux';
//import usersReducer from './users.reducer';
import nodesReducer from './nodes.reducer';
import trendsReducer from './trends.reducer';
import occurenceReducer from './occurence.reducer';
import polariteReducer from './polarite.reducer';
import tweetsReducer from './tweets.reducer';


export default combineReducers({
    //usersReducer,
    nodesReducer,
    trendsReducer,
    occurenceReducer,
    polariteReducer,
    tweetsReducer
});