import axios from 'axios';
import URL from "../URL/urls"
// const BASE_URL = "https://attendance-tracker-springboot.herokuapp.com/api/v1/"

const USERS_API_BASE_URL = URL.USERS_API_BASE_URL()
const USERS_URL = URL.USERS_URL()
const USER_ID_URL = URL.USER_ID_URL()


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
