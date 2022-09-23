import { combineReducers } from 'redux';
import category from './category';

const rootReducer = combineReducers({
  category: category,
});

export default rootReducer;
