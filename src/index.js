import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Portofolio from 'src/components/Portofolio';
import store from './store';

const rootReactElement = (
  <Provider store={store}>
    <BrowserRouter>
      <Portofolio />
    </BrowserRouter>
  </Provider>
);

const root = createRoot(document.getElementById('root'));

root.render(rootReactElement);
