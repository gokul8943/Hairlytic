import axios from '../../constants/Instance'

interface GenerateImageRequest {
    prompt: string;
    referenceImage: string;
    userId: string;
}

export const generateImage = (data: GenerateImageRequest) => {
    console.log('data', data);
    const { userId, ...rest } = data;
    return axios.post(`/generate/generate-image/${userId}`, rest);
}
