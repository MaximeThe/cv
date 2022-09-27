import { CATEGORIES_FETCH, SAVE_CATEGORY } from '../action/category';

export const initialState = {
  categories: [],
  categoriesFetch: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CATEGORY:
      return {
        ...state,
        categories: action.categories,
      };
    case CATEGORIES_FETCH:
      return {
        ...state,
        categoriesFetch: !state.fetch,
      };
    default:
      return state;
  }
};

export default reducer;
