import { combineReducers } from 'redux';
import category from './category';
import header from './header';


const rootReducer = combineReducers({
  category: category,
  header: header,
});

export default rootReducer;
