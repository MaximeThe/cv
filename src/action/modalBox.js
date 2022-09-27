export const TOGGLE_MODAL = "TOGGLE_MODAL";

export function toggleModal() {
  return {
    type: TOGGLE_MODAL,
  };
}
export const TOGGLE_MODAL_ERROR = "TOGGLE_MODAL_ERROR";

export function toggleModalError() {
  return {
    type: TOGGLE_MODAL_ERROR,
  };
}

export const NUMBER_IMG = "NUMBER_IMG";

export function numberImg(number) {
  return {
    type: NUMBER_IMG,
    numberImg: number,
  };
}

export const NUMBER_IMG2 = "NUMBER_IMG2";

export function numberImg2(number, number2) {
  return {
    type: NUMBER_IMG2,
    numberImg2: [number, number2],
  };
}