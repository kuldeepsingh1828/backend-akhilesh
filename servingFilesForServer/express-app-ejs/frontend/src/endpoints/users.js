import axios from 'axios';
const BASE_URL = 'http://localhost:3000';

export const getUsers = async () => {
    let response = await axios.get(`${BASE_URL}/users`);
    let { users } = await response.data;
    return users;
}

export const addUser = async (user) => {
    let response = await axios.post(`${BASE_URL}/users/add`, { user });
    return await response.data;

}