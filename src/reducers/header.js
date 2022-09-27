import {
  TOGGLE_NAVBAR_SUBTITLE,
  TOGGLE_NAVBAR,
  IMG_STICKY,
  IMG_STICKY_FALSE,
} from "../action/header";

export const initialState = {
  toogleNavbar: true,
  toogleNavbarSubtitle: true,
  imgSticky: true,
  spinner: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_NAVBAR:
      return {
        ...state,
        toogleNavbar: !state.toogleNavbar,
      };
    case IMG_STICKY:
      return {
        ...state,
        imgSticky: (state.imgSticky = true),
      };
    case IMG_STICKY_FALSE:
      return {
        ...state,
        imgSticky: (state.imgSticky = false),
      };
    case TOGGLE_NAVBAR_SUBTITLE:
      return {
        ...state,
        toogleNavbarSubtitle: !state.toogleNavbarSubtitle,
      };
    default:
      return state;
  }
};

export default reducer;
