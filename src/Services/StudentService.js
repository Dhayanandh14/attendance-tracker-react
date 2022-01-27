import axios from "axios";
import URL from "../URL/urls"

// const BASE_URL="https://attendance-tracker-springboot.herokuapp.com/api/v1/"


const STUDENTS_API_BASE_URL = URL.STUDENTS_API_BASE_URL()
const STUDENTS_URL = URL.STUDENTS_URL()
const USERS_DETAILS_DTO = URL.USERS_DETAILS_DTO()
const STUDENT_INFO_URL = URL.STUDENT_INFO_URL()


class StudentService {
  getStudentDetails() {
    return axios.get(STUDENTS_API_BASE_URL);
  }
  getStudents() {
    return axios.get(STUDENTS_URL);
  }
  getAllStudentDetails() {
    return axios.get(USERS_DETAILS_DTO);
  }
  createStudentDetails(details) {
    return axios.post(STUDENTS_API_BASE_URL, details);
  }
  //student info page
  getStudentInfo() {
    return axios.get(STUDENT_INFO_URL);
  }

  getStudentInfoById(id) {
    return axios.get(STUDENT_INFO_URL + "/" + id);
  }

  editStudentDetails(id,studentInfo){
    return axios.patch(STUDENT_INFO_URL+"/"+id,studentInfo)
  }
}
export default new StudentService();

// const accessToken = "ksdgfjksdgfkhshskd2kh4jrhrjk2"
// const APIUrl = "https://localhost:3000/api/v1/";

// function getMetod(endPoint, header = null) {
//   const options = header ? header : Object.assign({}, {authentication: {header: "bearear " + accessToken }});
//   const url = apiUrl + endPoint;
//   const data = axios.get(url, option);
// }
