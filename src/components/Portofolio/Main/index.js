import { useSelector } from 'react-redux';
import './style.scss';

function Main() {
  const categories = useSelector((state) => state.category.categories);
  // const tab = [];

  // console.log(categories.contacts);

  return (
    <main>
      <h2 className="home-title">Theneau Maxime</h2>
      <h3 className="home-subtitle">Développeur Web - FrontEnd - React.Js</h3>
      <div className="home-location">
        <i className="icon-location" />
        <p>Marseille</p>
      </div>
      <hr />
      {
              categories.filter((item) => item.idTitle === '#Projet').map((item) => (
                <div key={item.id} className="home-picture">
                  <div key={item.id} id={item.title} className="header-sticky">
                    <picture>
                      <source srcSet={item.imgWebp} type="image/webp" />
                      <img src={item.imgSvg} alt={item.title} />
                    </picture>
                  </div>
                  <h1 id={item.title} className="home-title">{item.title}</h1>
                  { item.experiences.map((experience) => (
                    <div key={experience.id} id={experience.idTitle} className="home-picture-experience">
                      <picture>
                        <source srcSet={experience.imageWebp} type="image/webp" />
                        <img src={experience.imageSvg} alt={item.title} />
                      </picture>
                      <h2>{experience.title}</h2>
                      <h3>{experience.contents}</h3>
                      <p>{experience.contents2}</p>
                      <a href={experience.contents3}>
                        <i className="icon-github" />
                      </a>

                    </div>
                  ))}
                </div>
              ))
        }

      <hr />

      {
          categories.filter((item) => item.idTitle === '#Contact').map((item) => (
            <>
              <div key={item.id} className="home-picture">
                <picture>
                  <source srcSet={item.imgWebp} type="image/webp" />
                  <img src={item.imgSvg} alt={item.title} />
                </picture>
                <h2 key={item.id} className="home-title" id={item.title}>{item.title}</h2>
              </div>
              <div className="home-contact">
                <h2 className="home-contact-title">Thenau Maxime</h2>
                <h3 className="home-contact-subtitle">Marseille </h3>
                {item.contacts.map((contact) => (
                  <div key={contact.idTitle} className="home-contact-list-social">
                    <a href={contact.email} target="_blank" rel="noreferrer">
                      <i className="icon-email" />
                    </a>
                    <a href={contact.Github} target="_blank" rel="noreferrer">
                      <i className="icon-github" />
                    </a>
                    <a href={contact.Linkedin} target="_blank" rel="noreferrer">
                      <i className="icon-linkedin" />
                    </a>
                    <a href={contact.twitter} target="_blank" rel="noreferrer">
                      <i className="icon-twitter" />
                    </a>
                  </div>
                ))}
              </div>
            </>
          ))
        }
    </main>
  );
}

export default Main;
