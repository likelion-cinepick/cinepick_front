import axios from "axios";

const TOKEN_TYPE = localStorage.getItem("tokenType");
let ACCESS_TOKEN = localStorage.getItem("accessToken");

const AuthApi = axios.create({
    baseURL: "http://3.105.163.214:8080",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `${TOKEN_TYPE} ${ACCESS_TOKEN}`, 
    },
});

/** LOGIN API */
export const login = async ({ userId, password }) => {
    const data = { userId, password };
    const response = await AuthApi.post(`/login`, data);
    return response.data;
}