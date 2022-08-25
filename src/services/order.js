import axios from 'axios';
import Swal from 'sweetalert2';
import { URL_API } from '../core/constant';

const getOrderAll = async (cb) => {
    try {
        const orders = await axios({
            method: 'GET',
            url: `${URL_API}/orders?populate=Upload`
        });
        cb(orders.data);
    } catch (err) {
        console.log(err);
    }
};

const getOrderById = async (cb, id) => {
    try {
        const users = await axios({
            method: 'GET',
            url: `${URL_API}/orders/${id}`
        });
        cb(users.data);
    } catch (err) {
        console.log(err);
    }
};

export { getOrderAll, getOrderById };
