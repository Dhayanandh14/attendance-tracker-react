import axios from 'axios';
import URL from "../URL/urls"
// const BASE_URL = "https://attendance-tracker-springboot.herokuapp.com/api/v1/"

const USERS_API_BASE_URL = URL.USERS_API_BASE_URL()
const USERS_URL = URL.USERS_URL()
const USER_ID_URL = URL.USER_ID_URL()
const STUDENT_COUNT_URL = URL.STUDENT_COUNT_URL()


class UserService{
  getUsers(){
    return axios.get(USERS_API_BASE_URL);
  }
  getUserByEmail(email){
    console.log(email)
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
  createUsers(user,check){
    return axios.post(USERS_API_BASE_URL+"/"+check,user)
  }

  // get students count
  getStudentCount(){
    return axios.get(STUDENT_COUNT_URL)
  }


}
export default new UserService()
