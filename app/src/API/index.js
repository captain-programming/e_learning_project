import axios from "axios";

const API = axios.create({
  baseURL: "http://192.168.43.186:8080",
});

export const loginApi = (authData) => API.post('/users/login', authData);
export const signupApi = (authData) => API.post('/users/signup', authData);
export const verifyEmail = (data) => API.post('/users/verify-otp', data);
export const createStudent = (data) => API.post('/users/create-student', data);
export const getAllUser = (data) => API.post('/users/users', data);
export const deleteUser = (id) => API.delete(`/users/delete-student/${id}`);
export const editUser = (id, data) => API.patch(`/users/edit-student/${id}`, data);