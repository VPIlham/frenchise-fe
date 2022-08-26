import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { getProducts, removeProduct } from 'services/product';
import MUIDataTable from 'mui-datatables';
import MainCard from 'ui-component/cards/MainCard';
import { Avatar, Button, Grid } from '@mui/material';
import { URL_DOMAIN } from 'core/constant';
import toRupiah from 'utils/toRupiah';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const getData = () => {
        getProducts((result) => {
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
            setProducts(data);
            console.log(data);
        });
    };

    useEffect(() => {
        getData();
    }, []);

    const hapus = (id) => {
        console.log(id);
        removeProduct(+id);
        navigate(`/app/products`);
    };

    const edit = (id) => {
        console.log(id);
        navigate(`/app/products/${id}`);
    };

    console.log();

    const columns = [
        {
            name: 'name',
            label: 'Nama Product',
            options: {
                filter: true,
                sort: true
            }
        },
        {
            name: 'price',
            label: 'Harga',
            options: {
                filter: true,
                sort: false,
                customBodyRender: (value) => <>{toRupiah(value)}</>
            }
        },
        {
            name: 'image',
            label: 'Gambar',
            options: {
                filter: false,
                customBodyRender: (value) => <Avatar alt="Remy Sharp" src={`${URL_DOMAIN}${value}`} />
            }
        },
        {
            name: 'description',
            label: 'Deskripsi',
            options: {
                filter: true,
                sort: false,
                customBodyRender: (value) => `${value.substr(0, 50)}...`
            }
        },
        {
            name: `BrandId`,
            label: 'Brand',
            options: {
                filter: true,
                sort: false,
                customBodyRender: (value) => <>BrandId</>
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
                        <Button variant="outlined" onClick={() => hapus(value)} color="warning">
                            Hapus
                        </Button>
                    </>
                )
            }
        }
    ];

    const options = {
        filterType: 'checkbox'
    };

    return (
        <MainCard title="List Products">
            <Grid container spacing={2}>
                <Grid item xs={12} justifyItems="center" alignItems="center">
                    <MUIDataTable title="Brands" data={products} columns={columns} options={options} />
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default ProductsPage;
