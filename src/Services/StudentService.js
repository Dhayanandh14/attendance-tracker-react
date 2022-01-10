import axios from "axios";

const STUDENTS_API_BASE_URL = "http://localhost:8080/api/v1/student_details";
const STUDENTS_URL = "http://localhost:8080/api/v1/students";
const USERS_DETAILS_DTO = "http://localhost:8080/api/v1/user-students";
const USER_ID_URL = "http://localhost:8080/api/v1/users_id";
const STUDENT_INFO_URL = "http://localhost:8080/api/v1/student_info";

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
  // createStudents(students){
  //   return axios.post(STUDENTS_URL,students);
  // }
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
