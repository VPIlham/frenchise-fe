import { Grid } from '@mui/material';
import React from 'react';
import { gridSpacing } from 'store/constant';
import EarningCard from '../Default/EarningCard';
import TotalIncomeDarkCard from '../Default/TotalIncomeDarkCard';
import TotalIncomeLightCard from '../Default/TotalIncomeLightCard';
import TotalOrderLineChartCard from '../Default/TotalOrderLineChartCard';

const DashboardSeller = () => (
    <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
            <Grid container spacing={gridSpacing}>
                <Grid item lg={4} md={6} sm={6} xs={12}>
                    <EarningCard />
                </Grid>
                <Grid item lg={4} md={6} sm={6} xs={12}>
                    <TotalOrderLineChartCard />
                </Grid>
            </Grid>
        </Grid>
    </Grid>
);

export default DashboardSeller;