import { lazy } from 'react';

// project imports
import LandingPage from 'views/landing';
import DetailPage from 'views/detail-brand';
import CustomLayout from 'layout/CustomLayout';

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const LandingRoutes = {
    path: '/',
    element: <CustomLayout />,
    children: [
        {
            path: '/',
            element: <LandingPage />
        },
        {
            path: '/franchise/:slug',
            element: <DetailPage />
        }
    ]
};

export default LandingRoutes;
