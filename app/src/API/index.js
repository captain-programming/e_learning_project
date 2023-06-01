import axios from "axios";

const API = axios.create({
  baseURL: "http://192.168.43.186:8080",
});

//USER
export const loginApi = (authData) => API.post('/users/login', authData);
export const signupApi = (authData) => API.post('/users/signup', authData);
export const verifyEmail = (data) => API.post('/users/verify-otp', data);
export const sendOtp = (email) => API.post(`/users/send-otp`, {email})
export const updatePassword = (email, password) => API.post(`/users/new-password`, {email, password})
export const createStudent = (data) => API.post('/users/create-student', data);
export const getAllUser = (data) => API.post('/users/users', data);
export const deleteUser = (id) => API.delete(`/users/delete-student/${id}`);
export const editUser = (id, data) => API.patch(`/users/edit-student/${id}`, data);

//BRANCH
export const createBranch = (data, college_code) => API.post('/branch/create', data, {headers: {college_code: college_code}});
export const getAllBranch = (college_code) => API.get('/branch/all-branch', {headers: college_code});
export const singleBranchDetails = (college_code, branch_name) => {

  return API.get('/branch/single-branch-details', {headers: {
    college_code,
    branch_name
  }});
}
export const deleteBranch = (college_code, id) => API.delete(`/branch/delete/${id}`, {headers: college_code});
export const updateBranch = (college_code, id, data) => API.patch(`/branch/update/${id}`, data, {headers: college_code});

//COURSES
export const createCourse = (data, college_code) => API.post('/course/create', data, {headers: {college_code: college_code}});
export const getAllCourse = (obj) => API.get('/course/all-course', {headers: obj});
export const deletedCourse = (college_code, id) => API.delete(`/course/delete/${id}`, {headers: college_code});
export const updateCourse = (college_code, id, data) => API.patch(`/course/update/${id}`, data, {headers: college_code});

//LECTURES
export const createLectures = (data, college_code) => API.post('/lecture/create', data, {headers: {college_code: college_code}});
export const getAllLectures = (obj, params) => API.get('/lecture/all-lectures', {headers: obj, params});
export const deletedLectures = (college_code, id) => API.delete(`/lecture/delete/${id}`, {headers: college_code});
export const updateLectures = (college_code, id, data) => API.patch(`/lecture/update/${id}`, data, {headers: college_code});

//ASSIGNMENTS
export const createAssignments = (data, college_code) => API.post('/assignment/create', data, {headers: {college_code: college_code}});
export const getAllAssignments = (obj, params) => API.get('/assignment/all-assignments', {headers: obj, params});
export const deletedAssignments = (college_code, id) => API.delete(`/assignment/delete/${id}`, {headers: college_code});
export const updateAssignments = (college_code, id, data) => API.patch(`/assignment/update/${id}`, data, {headers: college_code});