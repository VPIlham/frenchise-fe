import { lazy } from 'react';

// project imports
import LandingPage from 'views/landing';
import CustomLayout from 'layout/CustomLayout';

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const LandingRoutes = {
    path: '/',
    element: <CustomLayout />,
    children: [
        {
            path: '/',
            element: <LandingPage />
        }
    ]
};

export default LandingRoutes;
