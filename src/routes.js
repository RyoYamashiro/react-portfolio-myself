import Home from './pages/Home';
import Contact from './pages/Contact';

const routes = [
    { path: '/', component: Home, exact : true },
    { path: '/contact', component: Contact,},
];

export default routes;
