// == Import
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';
import './styles.scss';

// == Composant
function cV() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

// == Export
export default cV;
