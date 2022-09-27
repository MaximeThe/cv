import axios from 'axios';
import { categoriesFetch, FETCH_CATEGORY, saveCategory } from '../action/category';

// Lorsqu'on met en place un middleware, il ne faut pas oublier de le brancher au store !
const categoryMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CATEGORY: {
      axios.get('https://back-portofolio.unetaupechezvous.fr/public/api/categories')
        .then(
          (response) => {
            console.log(response);
            store.dispatch(saveCategory(response.data));
          },
        ).finally(() => {
          // console.log('Yes good finally');
          store.dispatch(categoriesFetch());
        });
      return next(action);
    }
    default:
      return next(action);
  }
};

export default categoryMiddleware;
