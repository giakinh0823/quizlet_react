import axios from "axios";


const baseURL = "http://localhost:3000/api/";

const axiosClient = axios.create({
    baseURL: `${baseURL}/`,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosClient; // export the axiosClient   