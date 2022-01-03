import axios from 'axios';

const USERS_API_BASE_URL = "http://localhost:8080/api/v1/users";
const USERS_URL = "http://localhost:8080/api/v1/signin";
const USER_ID_URL = "http://localhost:8080/api/v1/users_id"



class UserService{
  getUsers(){
    return axios.get(USERS_API_BASE_URL);
  }
  getUserByEmail(email){
    return axios.get(USERS_API_BASE_URL+"/"+email);
  }
  getUserByEmailAndName(email){
    return axios.get(USERS_API_BASE_URL+"/"+email);
  }
  getUserById(email){
    return axios.get(USER_ID_URL+"/"+email)
  }
  getUserByEmailandPassword(email,password){
    return axios.get(USERS_URL+"/"+email+"/"+password);
  }

  // new users page or sign up page
  createUsers(user){
    return axios.post(USERS_API_BASE_URL,user)
  }


}
export default new UserService()
