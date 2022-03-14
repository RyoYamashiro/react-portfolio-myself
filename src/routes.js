import Home from './pages/Home';
import Skills from './pages/Skills';
import Bio from './pages/Bio';
import Contact from './pages/Contact';

const routes = [
    { path: '/', component: Home, exact : true },
    { path: '/skills', component: Skills},
    { path: '/bio', component: Bio},
    { path: '/contact', component: Contact,},
];

export default routes;
