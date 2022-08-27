// material-ui
import { Typography, Button, Grid, ImageList, ImageListItem, CardMedia, Stack, Skeleton } from '@mui/material';
import { Box, fontFamily } from '@mui/system';
import axios from 'axios';
import { URL_API } from 'core/constant';
import useProfile from 'hooks/useProfile';
import MUIDataTable from 'mui-datatables';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { greetings } from 'utils/greetings';
// import CardItem from './components/CardItem';

// ==============================|| SAMPLE PAGE ||============================== //

const UserOrdersPage = () => {
    const [profile] = useProfile();
    const location = useLocation();
    const navigate = useNavigate();

    const [dataOrders, setDataOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const get = async () => {
        try {
            const result = await axios({
                method: 'GET',
                url: `${URL_API}/orders?populate=Item.Brand,User&filters[User][id]=${profile.id}`
            });

            if (result.status === 200) {
                const { data } = result.data;

                setDataOrders(data);
                setIsLoading(false);
            }
        } catch (error) {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        setIsLoading(true);
        get();
    }, []);

    return (
        <>
            <Typography variant="h1" gutterBottom sx={{ fontWeight: 500 }}>{`${greetings()}, ${profile?.name}`}</Typography>
            <Typography variant="h4" sx={{ fontWeight: 400, marginBottom: 4 }}>
                Ini adalah riwayat pendaftaran Kemitraan Kamu
            </Typography>
            <MUIDataTable
                options={{
                    filter: false,
                    download: false,
                    print: false,
                    viewColumns: false,
                    search: false,
                    elevation: 0,
                    selectableRows: false
                }}
                columns={[
                    {
                        name: 'name',
                        label: 'LOGO',
                        options: {
                            filter: true,
                            sort: true
                        }
                    },
                    {
                        name: 'name',
                        label: 'KEMITRAAN',
                        options: {
                            filter: true,
                            sort: true
                        }
                    },
                    {
                        name: 'name',
                        label: 'DIBUAT',
                        options: {
                            filter: true,
                            sort: true
                        }
                    },
                    {
                        name: 'role',
                        label: 'PEMBAYARAN',
                        options: {
                            filter: false
                        }
                    },
                    {
                        name: 'id',
                        label: 'TINDAKAN',
                        options: {
                            filter: false,
                            customBodyRender: (value) => (
                                <>
                                    <Button variant="outlined" color="primary" sx={{ mr: 1 }}>
                                        Edit
                                    </Button>
                                </>
                            )
                        }
                    }
                ]}
            />
        </>
    );
};

export default UserOrdersPage;
