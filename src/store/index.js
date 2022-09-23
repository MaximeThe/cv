import { createStore, applyMiddleware, compose } from 'redux';
import reducer from 'src/reducers';
import category from '../middlewares/categoryMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(

  applyMiddleware(
    category,
  ),

);

const store = createStore(reducer, enhancers);

export default store;
