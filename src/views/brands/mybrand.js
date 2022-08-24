import { FormControl, Grid, Input } from '@mui/material';
import { useEffect, useState } from 'react';

const MyBrandPage = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <FormControl>
                    <InputLabel htmlFor="my-input">Name</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
            </Grid>
        </Grid>
    );
};

export default MyBrandPage;
