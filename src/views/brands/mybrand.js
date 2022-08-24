import { FormControl, Button, Grid, Input, InputLabel, Select, MenuItem, TextField } from '@mui/material';
import { IconDeviceFloppy } from '@tabler/icons';
import useProfile from 'hooks/useProfile';
import { useEffect, useState } from 'react';
import { getBrandBySeller, updateBrandBySeller } from 'services/brand';
import MainCard from 'ui-component/cards/MainCard';
import moment from 'moment';

const MyBrandPage = () => {
    const [isLoading, setLoading] = useState(true);
    const [brand, setBrand] = useState([]);

    const [form, setForm] = useState({
        name: '',
        images: '',
        totalEmployees: '',
        startOperation: '',
        category: ''
    });

    const submitHandler = () => {
        updateBrandBySeller(form);
        // navigation('/products');
    };

    const [profile] = useProfile();

    useEffect(() => {
        setLoading(false);
        getBrandBySeller((result) => {
            setBrand(result.data);
            setForm({
                name: result.data.name,
                images: result.data.images,
                totalEmployees: result.data.totalEmployees,
                startOperation: result.data.startOperation,
                category: result.data.category,
                id: result.data.id
            });
        }, profile.id);
    }, []);

    return (
        <MainCard title="My Brand">
            <Grid container spacing={2}>
                <Grid item xs={9} justifyItems="center" alignItems="center">
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <TextField
                                    id="my-input"
                                    aria-describedby="my-helper-text"
                                    label="Name"
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <TextField
                                    id="my-input"
                                    aria-describedby="my-helper-text"
                                    label="Total Employee"
                                    type="number"
                                    value={form.totalEmployees}
                                    onChange={(e) => setForm({ ...form, totalEmployees: e.target.value })}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <TextField
                                    id="date"
                                    style={{ padding: 8 }}
                                    label="Start Operation"
                                    type="date"
                                    value={moment(form.startOperation).format('YYYY-MM-DD')}
                                    name="startOperation"
                                    sx={{ width: 220 }}
                                    onChange={(e) => setForm({ ...form, startOperation: e.target.value })}
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <InputLabel htmlFor="my-input">Category</InputLabel>
                                <Select
                                    id="demo-simple-category"
                                    name="category"
                                    value={form.category}
                                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                                    style={{ padding: 1 }}
                                >
                                    <MenuItem value="Industri Makanan & Minuman">Industri Makanan & Minuman</MenuItem>
                                    <MenuItem value="Industri Ritel">Industri Ritel</MenuItem>
                                    <MenuItem value="Industri kecantikan dan kesehatan">Industri kecantikan dan kesehatan</MenuItem>
                                    <MenuItem value="Industri pendidikan non formal">Industri pendidikan non formal</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <span item xs={5}>
                                Image
                            </span>
                            <Button variant="contained" component="label" style={{ 'margin-left': '15px' }}>
                                Upload File
                                <input type="file" hidden onChange={(e) => setForm({ ...form, image: e.target.files[0] })} />
                            </Button>
                        </Grid>
                        <Button
                            variant="contained"
                            onClick={() => submitHandler()}
                            sx={{ mt: 3, ml: 2 }}
                            color="success"
                            startIcon={<IconDeviceFloppy />}
                        >
                            Simpan
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default MyBrandPage;
