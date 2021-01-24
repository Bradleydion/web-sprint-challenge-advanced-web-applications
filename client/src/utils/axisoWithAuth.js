import axios from 'axios';

export const axiosWithAuth = () =>{
    const token = localStorage.getItem("token");
    return axios.create({
        baseURL:"http://locathost:5000",
        headers: {Authroization:token}
    })
}