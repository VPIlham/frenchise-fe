// material-ui
import { Typography } from '@mui/material';
import { useParams } from 'react-router';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const EditBrandPage = () => {
    const params = useParams();
    return (
        <MainCard title="Edit Brand">
            <Typography variant="body2">{params.id}</Typography>
        </MainCard>
    );
};

export default EditBrandPage;
