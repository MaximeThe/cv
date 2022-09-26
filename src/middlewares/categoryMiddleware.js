import axios from 'axios';
import { FETCH_CATEGORY, saveCategory, saveExperience } from '../action/category';

// Lorsqu'on met en place un middleware, il ne faut pas oublier de le brancher au store !
const categoryMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CATEGORY: {
      axios.get('http://localhost:8000/api/categories')
        .then(
          (response) => {
            console.log(response);
            store.dispatch(saveCategory(response.data));
            store.dispatch(saveExperience(response.data[1].experiences));
          },
        );
      return next(action);
    }
    default:
      return next(action);
  }
};

export default categoryMiddleware;
