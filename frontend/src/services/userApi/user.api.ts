import axios from '../../constants/Instance'

export const register = (data:any) =>{
    return axios.post('/user/register',data)
}
export const login = (data:any) =>{
    return axios.post('/user/login',data)
}