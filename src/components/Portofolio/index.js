import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchCategory } from '../../action/category';
import ModalBox from './ModalError';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import './style.scss';

function Portofolio() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategory());
  }, []);
  const categoriesFetch = useSelector((state) => state.category.categoriesFetch);
  return (
    <>
      {!categoriesFetch && (<h1>test</h1>)}
      {categoriesFetch && (
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <Header />
              <Main />
              <Footer />
            </>
         )}
        />
        <Route path="*" element={<ModalBox />} />
      </Routes>
      )}
    </>
  );
}

export default Portofolio;
