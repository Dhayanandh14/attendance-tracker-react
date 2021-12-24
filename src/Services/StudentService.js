import axios from 'axios';

const STUDENTS_API_BASE_URL = "http://localhost:8080/api/v1/student_details";

const STUDENTS_URL = "http://localhost:8080/api/v1/students";
class StudentService{
  getStudentDetails(){
    return axios.get(STUDENTS_API_BASE_URL);
  }
  getStudents(){
    return axios.get(STUDENTS_URL);
  }
  // createStudents(students){
  //   return axios.post(STUDENTS_URL,students);
  // }
  createStudentDetails(details){
    return axios.post(STUDENTS_API_BASE_URL,details);
  }
}
export default new StudentService()
