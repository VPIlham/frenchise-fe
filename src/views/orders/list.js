import { useEffect, useState } from 'react';
import moment from 'moment';
import MUIDataTable from 'mui-datatables';
import MainCard from 'ui-component/cards/MainCard';
import { Avatar, Button, Grid } from '@mui/material';
import { URL_DOMAIN } from 'core/constant';
import { useNavigate } from 'react-router';
import { getOrderAll } from 'services/order';

const ListOrderPage = () => {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    const getData = () => {
        getOrderAll((result) => {
            const data = result.data.map((value) => {
                value = {
                    ...value,
                    image: null
                };
                if (value.Upload != null) {
                    value.image = value.Upload.path;
                }
                return value;
            });
            setOrders(data);
        });
    };

    useEffect(() => {
        getData();
    }, []);

    const edit = (id) => {
        console.log(id);
        navigate(`/app/orders/${id}`);
    };

    const columns = [
        {
            name: 'name',
            label: 'Nama Barang',
            options: {
                filter: true,
                sort: true
            }
        },
        {
            name: 'name',
            label: 'Buyer',
            options: {
                filter: true,
                sort: true
            }
        },
        {
            name: 'name',
            label: 'Harga',
            options: {
                filter: true,
                sort: true
            }
        },
        {
            name: 'name',
            label: 'Brand',
            options: {
                filter: true,
                sort: true
            }
        },
        {
            name: 'email',
            label: 'Email',
            options: {
                filter: true,
                sort: false
            }
        },
        {
            name: 'role',
            label: 'Status Pembayaran',
            options: {
                filter: false
            }
        },
        {
            name: 'id',
            label: 'Action',
            options: {
                filter: false,
                customBodyRender: (value) => (
                    <>
                        <Button variant="outlined" color="primary" sx={{ mr: 1 }} onClick={() => edit(value)}>
                            Edit
                        </Button>
                    </>
                )
            }
        }
    ];

    return (
        <MainCard title="List Order">
            <Grid container spacing={2}>
                <Grid item xs={12} justifyItems="center" alignItems="center">
                    <MUIDataTable title="Order" data={orders} columns={columns} />
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default ListOrderPage;
