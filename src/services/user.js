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
        const {
            name,
            email,
            password,
            role,
            name_brand: nameBrand,
            total_employee: totalEmployees,
            start_operation: startOperation,
            category
        } = user;

        let tempObj = {};

        if (role === 'buyer') {
            tempObj = {
                email,
                password,
                name,
                role
            };
        } else {
            tempObj = {
                email,
                password,
                name,
                role,
                brand: {
                    name: nameBrand,
                    totalEmployees,
                    startOperation,
                    category
                }
            };
        }

        const result = await axios({
            method: 'POST',
            url: `${URL_API}/auth/register`,
            data: tempObj
        });

        Swal.fire('Success', 'Registrasi Berhasil', 'success');
        return result;
    } catch (err) {
        console.log(err);
        Swal.fire('Failed', 'Registrasi Gagal', 'error');
        return err;
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
