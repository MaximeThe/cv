import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from '../../action/category';
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
      <>
        <Header />
        <Main />
        <Footer />
      </>
      )}
    </>
  );
}

export default Portofolio;
