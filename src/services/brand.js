import axios from 'axios';
import Swal from 'sweetalert2';
import { URL_API } from '../core/constant';

const getBrand = async (cb) => {
    try {
        let brands = await axios({
            method: 'GET',
            url: URL_API
        });
        cb(brands.data);
    } catch (err) {
        console.log(err);
    }
};

export { getBrand };
