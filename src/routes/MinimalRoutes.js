import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import LandingPage from 'views/landing';

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const LandingRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/',
            element: <LandingPage />
        }
    ]
};

export default LandingRoutes;
