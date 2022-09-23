import { SAVE_CATEGORY } from "../action/category";

export const initialState = {
  categories: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CATEGORY:
      return {
        ...state,
        categories: action.categories,
      };
    default:
      return state;
  }
};

export default reducer;
