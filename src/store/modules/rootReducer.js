import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// import appReducer from './app/appReducer';
// import dbReducer from './db/dbReducer';

export default combineReducers({
  routing: routerReducer,
  // app: appReducer,
  // db: dbReducer
});
