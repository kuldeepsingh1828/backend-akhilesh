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

export const deleteUser = async (id) => {
    let response = await axios.delete(`${BASE_URL}/users/delete/${id}`);
    return await response.data;
}

export const updateUser = async (user) => {
    let response = await axios.put(`${BASE_URL}/users/update/${user._id}`, { user });
    return await response.data;
}