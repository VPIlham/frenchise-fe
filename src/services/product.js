import axios from 'axios';
import Swal from 'sweetalert2';
import { URL_API } from '../core/constant';

const addProducts = async (values) => {
    try {
        const formData = new FormData();

        const { name, price, description, UserId, BrandId } = values;

        const tempObj = {
            name,
            price,
            description,
            UserId,
            BrandId
        };

        formData.append('image', values.image, values.image.name);
        formData.append('data', tempObj);

        const result = await axios({
            method: 'POST',
            url: `${URL_API}/items`,
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        Swal.fire('Berhasil', 'Add Produk Berhasil!', 'success');
        return result;
    } catch (err) {
        Swal.fire('Gagal', 'Add Produk Gagal!', 'error');
        return err.response;
    }
};

const getProducts = async (cb) => {
    try {
        const result = await axios({
            method: 'GET',
            url: `${URL_API}/items`
        });
        cb(result);
    } catch (err) {
        console.log(err);
    }
};

export { addProducts, getProducts };
