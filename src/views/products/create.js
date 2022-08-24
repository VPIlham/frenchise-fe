import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Button, TextField, TextareaAutosize } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';

import { addProducts } from '../../services/product';
import useProfile from 'hooks/useProfile';

// ==============================|| SAMPLE PAGE ||============================== //

const ProductsPage = () => {
    const navigation = useNavigate();

    const [profile] = useProfile();

    const [form, setForm] = useState({
        name: '',
        price: 0,
        description: '',
        UserId: profile.id,
        BrandId: 1,
        image: ''
    });

    const submitHandler = () => {
        addProducts(form);
        // navigation('/products');
    };

    return (
        <MainCard title="Tambah Product">
            <Box>
                <Grid container spacing={2} item xs={12}>
                    <Grid item xs={7}>
                        <span>Nama Produk</span>
                        <TextField
                            fullWidth
                            required
                            id="outlined-required"
                            size="small"
                            style={{ 'margin-top': '8px' }}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={7}>
                        <span>Harga</span>
                        <TextField
                            fullWidth
                            required
                            id="outlined-required"
                            size="small"
                            style={{ 'margin-top': '8px' }}
                            onChange={(e) => setForm({ ...form, price: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={7}>
                        <span item xs={4}>
                            Image
                        </span>
                        <Button variant="contained" component="label" style={{ 'margin-left': '15px' }}>
                            Upload File
                            <input type="file" hidden onChange={(e) => setForm({ ...form, image: e.target.files[0] })} />
                        </Button>
                    </Grid>
                    <Grid item xs={7}>
                        <span>Deskripsi</span>
                        <br />
                        <TextField
                            style={{ marginTop: 8 }}
                            id="standard-multiline-static"
                            onChange={(e) => setForm({ ...form, description: e.target.value })}
                            multiline
                            rows={5}
                            placeholder="Masukkan deskripsi"
                            variant="filled"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={7}>
                        <Button variant="contained" color="success" onClick={() => submitHandler()}>
                            Tambah
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </MainCard>
    );
};

export default ProductsPage;
