import axiosInstance from '../axios/axiosInstance'
import { UserLogin, ResponseLogin } from '../interfaces/user'

export const Login = async (login: UserLogin): Promise<ResponseLogin> => {
    const { data } = await axiosInstance.post<ResponseLogin>('/login', login);
    return data;
};