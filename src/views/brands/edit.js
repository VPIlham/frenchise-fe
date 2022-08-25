// material-ui
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getBrandById } from 'services/brand';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const EditBrandPage = () => {
    const params = useParams();

    const [brands, setBrands] = useState([]);

    useEffect(() => {
        getBrandById((result) => {
            setBrands(result.data);
        }, params.id);
    }, []);

    console.log(brands);

    return (
        <MainCard title="Edit Brand">
            <Typography variant="body2">{params.id}</Typography>
        </MainCard>
    );
};

export default EditBrandPage;
