import { Navigate, useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import config from 'config';
import MainLayout from 'layout/MainLayout';
import MinimalLayout from 'layout/MinimalLayout';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    const getUser = localStorage.getItem('users') || null;

    if (getUser !== null) {
        if (getUser.role === 'seller' || getUser.role === 'admin') {
            MainRoutes.element = <MainLayout />;
            AuthenticationRoutes.element = <Navigate to="/" />;
        } else {
            MainRoutes.element = <MinimalLayout />;
        }
    } else {
        AuthenticationRoutes.element = <MinimalLayout />;
    }
    return useRoutes([MainRoutes, AuthenticationRoutes], config.basename);
}
