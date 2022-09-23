import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default Portofolio;
