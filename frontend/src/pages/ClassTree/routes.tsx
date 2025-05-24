import { lazy } from 'react';

const ClassTrees = lazy(() => import('./index.tsx'));

const classTreesRoutes = [{ path: '/class-tree', component: ClassTrees }];

export default classTreesRoutes;
