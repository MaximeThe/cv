import { combineReducers } from 'redux';
import category from './category';
import header from './header';
import modalBox from './modalBox';

const rootReducer = combineReducers({
  category: category,
  header: header,
  modalBox: modalBox,
});

export default rootReducer;
