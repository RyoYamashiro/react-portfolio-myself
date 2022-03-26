import Top from './pages/Top';
import Skills from './pages/Skills';
import Bio from './pages/Bio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const routes = [
    { path: '/', title: 'Top', component: Top, exact : true },
    { path: '/skills', title: 'Skills', component: Skills},
    { path: '/bio', title: 'Bio', component: Bio},
    { path: '/contact', title: 'Contact', component: Contact,},
    { component: NotFound},
];

export default routes;
