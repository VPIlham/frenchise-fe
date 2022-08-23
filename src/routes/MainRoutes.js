import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// sample page routing
const ProductPage = Loadable(lazy(() => import('views/products/index')));
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/products',
            element: <ProductPage />
        },
        {
            path: '/brands',
            element: <ProductPage />
        },
        {
            path: '/orders',
            element: <ProductPage />
        }
    ]
};

export default MainRoutes;
