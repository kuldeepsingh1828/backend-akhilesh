import axios from 'axios';
const BASE_URL = 'http://localhost:3000';


export const uploadFile = async (formData) => {
    const res = await axios.post(`${BASE_URL}/upload`, formData);
    console.log(res.data);
    return res.data;
}
