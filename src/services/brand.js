import axios from 'axios';
import Swal from 'sweetalert2';
import { URL_API } from '../core/constant';

const getBrandAll = async (cb) => {
    try {
        const brands = await axios({
            method: 'GET',
            url: URL_API
        });
        cb(brands.data);
    } catch (err) {
        console.log(err);
    }
};

const getBrandBySeller = async (cb, id) => {
    try {
        const brands = await axios({
            method: 'GET',
            url: `${URL_API}/brands/${id}?populate=Upload`
        });
        return cb(brands.data);
    } catch (err) {
        return err;
    }
};

const updateBrandBySeller = async (values) => {
    try {
        const formData = new FormData();

        const { name, images, totalEmployees, startOperation, category, id } = values;

        const tempObj = {
            name,
            totalEmployees,
            startOperation,
            category
        };

        formData.append('image', values.image, values.image.name);
        formData.append('data', JSON.stringify(tempObj));

        const brands = await axios({
            method: 'PUT',
            url: `${URL_API}/brands/${id}`,
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        Swal.fire('Berhasil', 'Update Brand Berhasil!', 'success');
        return brands;
    } catch (err) {
        console.log(err);
        Swal.fire('Gagal', 'Update Brand Gagal!', 'error');
        return err;
    }
};

export { getBrandBySeller, getBrandAll, updateBrandBySeller };
