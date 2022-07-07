import Description from './Description';
import './style.scss';
import Title from './Title';

function Header() {
  return (
    <header className="header">
      <Title />
      <Description />
    </header>
  );
}

export default Header;
