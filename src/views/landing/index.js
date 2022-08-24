// material-ui
import { Typography, Button } from '@mui/material';
import useProfile from 'hooks/useProfile';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //
const handleLogout = async () => {
    localStorage.clear();
    window.location.href = '/';
};

const LandingPage = () => {
    const [profile] = useProfile();
    return (
        <MainCard title="Sample Card">
            {profile !== null ? (
                <Button variant="contained" onClick={() => handleLogout()}>
                    Logout
                </Button>
            ) : null}
            <Typography variant="body2">
                Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut
                enif ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue
                dolor in reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president,
                sunk in culpa qui officiate descent molls anim id est labours.
            </Typography>
        </MainCard>
    );
};

export default LandingPage;
