// material-ui
import { Typography, Button, Grid, ImageList, ImageListItem, CardMedia, Stack, Skeleton } from '@mui/material';
import { Box, fontFamily } from '@mui/system';
import axios from 'axios';
import { URL_API } from 'core/constant';
import useProfile from 'hooks/useProfile';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// project imports
import MainCard from 'ui-component/cards/MainCard';
// import CardItem from './components/CardItem';

// ==============================|| SAMPLE PAGE ||============================== //

const UserOrdersPage = () => {
    const [profile] = useProfile();
    const location = useLocation();
    const navigate = useNavigate();

    const [dataBrands, setDataBrands] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const get = async () => {
        try {
            const result = await axios({
                method: 'GET',
                url: `${URL_API}/brands?populate=Item,Upload,User`
            });

            if (result.status === 200) {
                const { data } = result.data;

                data.map((item) => {
                    if (item.Items.length > 0) {
                        item.Items.sort((a, b) => a.price - b.price);
                    }
                    return item;
                });

                setDataBrands(data);
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        setIsLoading(true);
        get();
    }, []);

    return <>Test</>;
};

export default UserOrdersPage;
