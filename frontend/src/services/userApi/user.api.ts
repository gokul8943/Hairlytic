import axios from '../../constants/Instance'

export const register = (data:any) =>{
    return axios.post('/register',data)
}