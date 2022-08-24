// material-ui
import { Typography, Button, Grid, ImageList, ImageListItem, CardMedia, Stack } from '@mui/material';
import { Box, fontFamily } from '@mui/system';
import axios from 'axios';
import { URL_API } from 'core/constant';
import useProfile from 'hooks/useProfile';
import { useEffect, useState } from 'react';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import CardItem from './components/CardItem';

// ==============================|| SAMPLE PAGE ||============================== //
const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
        title: 'Books'
    },
    {
        img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
        title: 'Sink'
    },
    {
        img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
        title: 'Kitchen'
    },
    {
        img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
        title: 'Storage'
    },
    {
        img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
        title: 'Candle'
    },
    {
        img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
        title: 'Coffee table'
    }
];

const category = [{}];

const LandingPage = () => {
    const [profile] = useProfile();

    const [dataBrands, setDataBrands] = useState([]);

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
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        get();
    }, []);

    return (
        <>
            <Box
                borderRadius={2}
                minHeight={300}
                padding={5}
                sx={{
                    backgroundColor: '#f7f5f3'
                }}
            >
                <Grid container p={1} spacing={5}>
                    <Grid item lg={6} md={6}>
                        <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 40, lineHeight: 1.3 }} variant="h3">
                            Temukan usahamu dan Buka<span style={{ color: '#673ab7' }}>franchise</span> tanpa ribet
                        </Typography>
                        <br />
                        <Typography sx={{ fontFamily: 'Poppins' }} variant="h5">
                            Temukan berbagai franchise untuk dipelajari. Transaksi dengan aman semua dalam satu aplikasi.
                        </Typography>
                    </Grid>
                    <Grid item lg={6} md={6}>
                        <div
                            style={{
                                backgroundImage:
                                    'url("https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1659540022912x615857609647667600%2Fhero%2520banner%2520home%2520buyer1080%2520%25281%2529%2520%25281%2529.webp?w=250&h=120&auto=compress&fit=crop&dpr=2")',
                                backgroundRepeat: 'no-repeat',
                                height: '100%'
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>

            <div style={{ marginTop: 48 }}>
                <Typography variant="h2">Franchise Kami</Typography>

                <Grid container spacing={5} marginTop={0.1}>
                    {dataBrands.map((item) => (
                        <Grid key={item.id} item lg={3} md={3} sm={6} xs={6}>
                            <CardItem data={item} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    );
};

export default LandingPage;
