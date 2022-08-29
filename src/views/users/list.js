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

    const [table, setTable] = useState({
        data: [],
        page: 0,
        limit: 10,
        count: 0,
        search: '',
        sort: '&sort=createdAt&direction=desc'
    });

    const getData = () => {
        getUserAll({ ...table, page: table.page + 1 }, (result) => {
            const { data, meta } = result;
            console.log(result);
            const res = data.map((value) => {
                value = {
                    ...value,
                    image: null
                };
                if (value.Upload != null) {
                    value.image = value.Upload.path;
                }
                return value;
            });
            setTable({ ...table, data: res, count: meta.pagination.total });
        });
    };

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [table.page, table.limit, table.sort, table.search]);

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
                sort: true
            }
        },
        {
            name: 'role',
            label: 'Role',
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
        <MainCard title="List Users">
            <Grid container spacing={2}>
                <Grid item xs={12} justifyItems="center" alignItems="center">
                    <MUIDataTable
                        data={table.data}
                        columns={columns}
                        options={{
                            page: table.page,
                            limit: table.limit,
                            count: table.count,
                            filter: false,
                            download: false,
                            print: false,
                            viewColumns: false,
                            search: false,
                            elevation: 0,
                            selectableRows: 'none',
                            serverSide: true,
                            onTableChange: (action, tableState) => {
                                const rowsPerPage = tableState.rowsPerPage || 10;
                                const page = tableState.page || 0;
                                console.log(tableState);
                                if (action === 'changePage' || action === 'changeRowsPerPage') {
                                    setTable({
                                        ...table,
                                        page,
                                        limit: rowsPerPage
                                    });
                                }
                            },
                            onColumnSortChange: (changedColumn, direction) => {
                                setTable({
                                    ...table,
                                    sort: `&sort=${changedColumn}&direction=${direction}`
                                });
                            }
                        }}
                    />
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default ListUserPage;
