import { useSelector } from 'react-redux';
import './style.scss';

function Header() {
  const categories = useSelector((state) => state.category.categories);
  // console.log(categoriesHeader.title);
  return (
    <header className="header">
      <div className="header-navbar">
        { categories.map((category) => (
          <div key={category.id}>
            <ul>
              <li>
                <a href={`${category.idTitle}`}>{category.title}</a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </header>
  );
}

export default Header;
