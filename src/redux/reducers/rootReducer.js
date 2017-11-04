import { combineReducers } from 'redux';
import movieReducer from './movieReducer';

// The only reason I'm using combineReducers here
// is that in the future, we might want to add other
// reducers, and it's best to just keep this here
const rootReducer = combineReducers({
  movieReducer
});

export default rootReducer;
