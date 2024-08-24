import axios from "axios";
import { path } from "../routes/pathes";
//------------------------------------------------------

const axiosInstance = axios.create({
    baseURL: "https://skills-api-zeta.vercel.app",
    headers: {
        LANGUAGE: 'en'
    },
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response?.data
    },
    (error) => {
        if (error?.response?.status === 404) {
            alert('Not Found this Id');
            window.location.replace(path.home)
        }
        return Promise.reject((error.message) || 'Something went wrong')
    }
);

export default axiosInstance;