import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import ProtectedRoute from './ProtectedRoute';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// Admin page routing
const ProductPage = Loadable(lazy(() => import('views/products/index')));

// Seller page routing

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/app',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <ProtectedRoute component={DashboardDefault} roles={['admin', 'seller']} />
        },
        {
            path: '/dashboard',
            element: <ProtectedRoute component={DashboardDefault} roles={['admin', 'seller']} />
        },
        {
            path: '/users',
            element: <ProtectedRoute component={ProductPage} roles={['admin']} />
        },
        {
            path: '/users/create',
            element: <ProtectedRoute component={ProductPage} roles={['admin']} />
        },
        {
            path: '/products',
            element: <ProtectedRoute component={ProductPage} roles={['admin', 'seller']} />
        },
        {
            path: '/brands',
            element: <ProtectedRoute component={ProductPage} roles={['admin']} />
        },
        {
            path: '/orders',
            element: <ProtectedRoute component={ProductPage} roles={['seller']} />
        }
    ]
};

export default MainRoutes;
