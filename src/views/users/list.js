import { useEffect, useState } from 'react';
import moment from 'moment';
import MUIDataTable from 'mui-datatables';
import MainCard from 'ui-component/cards/MainCard';
import { Avatar, Button, Grid } from '@mui/material';
import { URL_DOMAIN } from 'core/constant';
import { useNavigate } from 'react-router';
import { getUserAll } from 'services/user';

const ListUserPage = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const getData = () => {
        getUserAll((result) => {
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
            setUsers(data);
        });
    };

    useEffect(() => {
        getData();
    }, []);

    const edit = (id) => {
        console.log(id);
        navigate(`/app/users/${id}`);
    };

    const columns = [
        {
            name: 'name',
            label: 'Nama Lengkap',
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
                sort: false,
                customBodyRender: (value) => moment(value).format('DD MMMM YYYY')
            }
        },
        {
            name: 'role',
            label: 'Role',
            options: {
                filter: false,
                customBodyRender: (value) => <Avatar src={`${URL_DOMAIN}${value}`} />
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
        <MainCard title="List Users">
            <Grid container spacing={2}>
                <Grid item xs={12} justifyItems="center" alignItems="center">
                    <MUIDataTable title="Users" data={users} columns={columns} />
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default ListUserPage;
