import axios from 'axios';
import Swal from 'sweetalert2';
import { URL_API } from '../core/constant';

// const getUser = async (cb) => {
//     try {
//         let users = await axios({
//             method: 'GET',
//             url: URL_API
//         });
//         cb(users);
//     } catch (err) {
//         console.log(err);
//     }
// };

const addUser = async (user) => {
    try {
        const result = await axios({
            method: 'POST',
            url: `${URL_API}/create`,
            data: user
        });

        // Swal.fire('Add Users', 'Users has been added', 'success');
        console.log(result);
    } catch (err) {
        console.log(err);
    }
};

const login = async (user) => {
    try {
        const result = await axios({
            method: 'POST',
            url: `${URL_API}/auth/login`,
            data: user
        });
        return result;
    } catch (err) {
        Swal.fire('Login Gagal', 'Email/Password Anda salah!', 'error');
        return err.response;
    }
};

export { addUser, login };
