import { SAVE_CATEGORY, SAVE_EXPERIENCES } from '../action/category';

export const initialState = {
  categories: [],
  experiences: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CATEGORY:
      return {
        ...state,
        categories: action.categories,
      };
    case SAVE_EXPERIENCES:
      return {
        ...state,
        experiences: action.experiences,
      };
    default:
      return state;
  }
};

export default reducer;
