import axios from 'axios';
import { history } from '../navigate';

const axiosInstance = axios.create({
  baseURL: 'https://my-app-url.com', //temporary
});

axiosInstance.interceptors.response.use((config) => {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401 || error.response.status === 403) {
            localStorage.removeItem('token');
            history.push('/login');
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;

