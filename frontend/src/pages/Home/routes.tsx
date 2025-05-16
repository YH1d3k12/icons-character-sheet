import { lazy } from 'react';

const Home = lazy(() => import('./index.tsx'));

const homeRoutes = [{ path: '/', component: Home }];

export default homeRoutes;
