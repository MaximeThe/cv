// == Import : npm
import { createRoot } from 'react-dom/client';

// == Import : local
// Composants
<<<<<<< HEAD
import Cv from 'src/components/Cv';
=======
import App from 'src/components/App';
>>>>>>> 3f9dd5089e88501900d76beed9119031a9402934

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
<<<<<<< HEAD
const rootReactElement = <Cv />;
=======
const rootReactElement = <App />;
>>>>>>> 3f9dd5089e88501900d76beed9119031a9402934

// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const root = createRoot(document.getElementById('root'));

// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
root.render(rootReactElement);
