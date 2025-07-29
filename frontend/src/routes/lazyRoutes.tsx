import { lazy } from 'react';

const Profile = lazy(() => import('../pages/Profile/'));
const Inventory = lazy(() => import('../pages/Inventory/'));

const routes = [
    { path: '/', component: Profile },
    { path: '/inventory', component: Inventory },
];

export default routes;
