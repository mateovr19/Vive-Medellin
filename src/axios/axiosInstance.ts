import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json'
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        if (typeof window !== 'undefined' && config.url !== '/login') {
            const authToken = localStorage.getItem('token')
            if (authToken) {
                config.headers.Authorization = `Bearer ${authToken}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;