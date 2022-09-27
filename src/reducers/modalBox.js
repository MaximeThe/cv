import {
  NUMBER_IMG,
  NUMBER_IMG2,
  TOGGLE_MODAL,
  TOGGLE_MODAL_ERROR,
} from "../action/modalBox";

export const initialState = {
  toggleModal: false,
  toggleModalError: false,
  numberImg: [],
  numberImg2: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        toggleModal: !state.toggleModal,
      };
    case TOGGLE_MODAL_ERROR:
      return {
        ...state,
        toggleModalError: !state.toggleModalError,
        numberImg: false,
      };
    case NUMBER_IMG:
      return {
        ...state,
        numberImg: [...state.numberImg, state.numberImg.length + 1],
      };
    case NUMBER_IMG2:
      return {
        ...state,
        numberImg2: state.numberImg2.concat(action.numberImg2),
      };
    default:
      return state;
  }
};

export default reducer;
