// == Import
// import Video from "../../assets/video.mp4";
import './styles.scss';

// == Composant
function cV() {
  return (
    <div className="app">
      <video autoPlay muted loop id="myVideo">
        <source src={require('../../assets/video.mp4')} type="video/mp4" />
      </video>
      <div className="content">
        <h1>Theneau Maxime</h1>
        <h2>Developpeur web Front-End à Marseille</h2>
        <p>In Progress</p>
        
      </div>
    </div>
  );
}

// == Export
export default cV;
