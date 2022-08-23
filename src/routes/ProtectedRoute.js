import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
// hooks
import useProfile from 'hooks/useProfile';

const ProtectedRoute = ({ component: Component, roles }) => {
    const navigate = useNavigate();
    const [profile] = useProfile();

    if (roles && roles.indexOf(profile.role) === -1) {
        sessionStorage.clear();
        navigate('/auth/login');
    }

    return <Component />;
};

ProtectedRoute.propTypes = {
    component: PropTypes.any,
    roles: PropTypes.any
};

export default ProtectedRoute;
