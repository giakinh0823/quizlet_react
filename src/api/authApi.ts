import axiosClient from "./axiosClient";


const authApi = {
    login: (data: any) => {
        return axiosClient.post(`/auth/login`, data);
    },
    getUser: (data: any) => {
        return axiosClient.get(`/auth/user`, data);
    },
    logout: () => { 
        return axiosClient.post(`/auth/logout`);
    }
}

export default authApi;