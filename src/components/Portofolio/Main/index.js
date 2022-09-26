import { useSelector } from 'react-redux';
import './style.scss';

function Main() {
  const experience = useSelector((state) => state.category.experiences);
  return (
    <main>
      
      {
          experience.map((item) => (
            <div key={item.id} className="experiences">
              <picture>
                <source srcSet={item.imageWebp} type="image/webp" />
                <img src={item.imageSvg} alt={item.title} />
              </picture>
              <h2>{item.title}</h2>
              <div className="experiences-contents">
                <h3>
                  {item.contents}
                </h3>
              </div>
              <div className="experiences-contents">
                {item.contents2}
              </div>
              <div className="experiences-contents">
                <a href={item.contents3} target="_blank" rel="noreferrer">
                  <i className="icon-github" />
                </a>
              </div>
            </div>
          ))
          }
    </main>
  );
}

export default Main;
