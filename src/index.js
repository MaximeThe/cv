import { createRoot } from 'react-dom/client';
import Portofolio from 'src/components/Portofolio';

const rootReactElement = <Portofolio />;

const root = createRoot(document.getElementById('root'));

root.render(rootReactElement);
