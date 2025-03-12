import axios from '../../constants/Instance'

export const generateImage = (formData:any) =>{
    console.log('data',formData);
    
    return axios.post('/generate/generate-image',formData)
}