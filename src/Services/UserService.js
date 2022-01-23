import axios from 'axios';

// const BASE_URL = "https://attendance-tracker-springboot.herokuapp.com/api/v1/"



const BASE_URL = "http://localhost:8080/api/v1/"

const USERS_API_BASE_URL = `${BASE_URL}users`;
const USERS_URL = `${BASE_URL}signin`;
const USER_ID_URL = `${BASE_URL}users_id`



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
