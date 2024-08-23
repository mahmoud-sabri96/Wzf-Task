import axios from "axios";
//------------------------------------------------------


const axiosInstance = axios.create({
    baseURL: "https://skills-api-zeta.vercel.app",
    headers: {
        LANGUAGE: 'en'
    },
});

axiosInstance.interceptors.response.use(
    (response) => {
        // if (response?.status === 200 && response?.data?.status === true) {
        //     // successToast(response?.data?.message); 
        //     successToast('Sucessfull '); 
        // }
        // if (response?.status === 200 && response?.data?.status === false) {
        //     // errorToast(response?.data?.message);
        //     errorToast('Something went wrong');
        // }
        return response?.data
    },
    (error) => {
        // console.log(error)
        // if (error?.message !== 'canceled') {
            // errorToast('Something went wrong');
            return Promise.reject((error.response && error.response.data) || 'Something went wrong')
        // }
        // errorToast(error?.response?.data?.message || 'Something went wrong');
    }
);

export default axiosInstance;