export const FETCH_CATEGORY = 'FETCH_CATEGORY';

export function fetchCategory() {
  return {
    type: FETCH_CATEGORY,
  };
}
export const SAVE_CATEGORY = 'SAVE_CATEGORY';

export function saveCategory(categories) {
  return {
    type: SAVE_CATEGORY,
    categories: categories,
  };
}

export const CATEGORIES_FETCH = 'CATEGORIES_FETCH';

export function categoriesFetch(fetch) {
  return {
    type: CATEGORIES_FETCH,
    categoriesFetch: fetch,
  };
}
