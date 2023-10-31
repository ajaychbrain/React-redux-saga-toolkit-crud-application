import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/'

export const getUserAPI = async ()=> axios.get(`/users`)

export const getUserByIdAPI = async (id)=> axios.get(`/users/${id}`)

export const createUserAPI = async (user) => axios.post(`/users`,user)

export const updateUserAPI = async (user) => axios.put(`/users/${user.id}`,user)

export const deleteUserByIdAPI = async (user) => axios.delete(`/users/${user.id}`)