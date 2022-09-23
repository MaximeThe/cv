export const FETCH_CATEGORY = 'FETCH_CATEGORY';

// Action creator => On l'utilise au moment du dispatch()
export function fetchCategory() {
  return {
    type: FETCH_CATEGORY,
  };
}
export const SAVE_CATEGORY = 'SAVE_CATEGORY';
// Action creator => On l'utilise au moment du dispatch()
export function saveCategory(categories) {
  return {
    type: SAVE_CATEGORY,
    categories: categories,
  };
}
