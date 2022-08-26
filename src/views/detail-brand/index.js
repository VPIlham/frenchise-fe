// material-ui
import { Typography, Button, Grid, CircularProgress, Skeleton, Avatar, Chip } from '@mui/material';
import { Box, fontFamily } from '@mui/system';
import axios from 'axios';
import { IMG_DEFAULT, URL_API, URL_DOMAIN } from 'core/constant';
import useProfile from 'hooks/useProfile';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import toRupiah from 'utils/toRupiah';

// ==============================|| SAMPLE PAGE ||============================== //

const DetailBrandPage = () => {
    const [profile] = useProfile();

    const params = useParams();

    const [isFound, setIsFound] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const [dataBrand, setDataBrand] = useState(null);

    const get = async () => {
        try {
            const result = await axios({
                method: 'GET',
                url: `${URL_API}/brands/slug/${params.slug}?populate=Item,Upload,User`
            });

            if (result.status === 200) {
                const { data } = result.data;

                if (data.Items.length > 0) {
                    data.Items.sort((a, b) => a.price - b.price);
                }

                setDataBrand(data);
                setIsLoading(false);
                // setIsFound(true);
            }
        } catch (error) {
            setIsFound(false);
        }
    };

    useEffect(() => {
        setIsLoading(true);
        get();
    }, []);

    console.log(dataBrand);

    return (
        <>
            {isLoading ? (
                <Skeleton variant="rectangular" animation="wave" height={200} sx={{ backgroundColor: '#F2F4F7', borderRadius: 2 }} />
            ) : (
                <Box
                    borderRadius={2}
                    minHeight={200}
                    padding={3}
                    sx={{
                        backgroundColor: '#F2F4F7'
                    }}
                >
                    <Grid container p={1} spacing={5}>
                        <Grid item container alignItems="center" spacing={4}>
                            <Grid item>
                                <Avatar
                                    src={`${URL_DOMAIN}${dataBrand?.Upload?.path}` || IMG_DEFAULT}
                                    variant="rounded"
                                    sx={{ height: 150, width: 150 }}
                                />
                            </Grid>
                            <Grid item>
                                <Typography gutterBottom sx={{ fontSize: 20, fontWeight: 400 }}>
                                    {dataBrand?.name}
                                </Typography>

                                {dataBrand?.Items.length > 0 && (
                                    <Typography sx={{ fontSize: 32, fontWeight: 500 }}>
                                        {toRupiah(dataBrand.Items[0].price, { formal: false, spaceBeforeUnit: true, floatingPoint: 0 })}
                                    </Typography>
                                )}

                                {dataBrand?.Items.length === 0 && <Chip label="Belum Tersedia" sx={{ borderRadius: 2, marginTop: 0.5 }} />}
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            )}

            <Grid item container>
                <Grid item>
                    <Typography sx={{ fontSize: 20, fontWeight: 400 }}>Profil Brand</Typography>
                    <Typography sx={{ fontSize: 20, fontWeight: 400 }}>{dataBrand?.description}</Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default DetailBrandPage;
