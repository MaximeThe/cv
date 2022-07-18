import Description from './Description';
import './style.scss';
import Title from './Title';
import Icon from '../../assets/image/fondCv.svg';

function Header() {
  return (
    <header className="header">
      <img src={Icon} className="header-img" alt="background"/>
      <Title />
      <Description />
    </header>
  );
}

export default Header;
