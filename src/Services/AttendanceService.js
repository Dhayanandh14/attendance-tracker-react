import axios from "axios";


const API_BASE_URL = "http://localhost:8080/api/v1/"

const ATTENDANCE_URL = `${API_BASE_URL}attendance` // http://localhost:8080/api/v1/attendance {data}

class AttendanceService {
  getAttendance(){
    return axios.get(ATTENDANCE_URL);
  }
  createAttendance(attendance) {
    console.log(ATTENDANCE_URL)
    return axios.post(ATTENDANCE_URL, attendance);
  }
  getAttendanceByDate(date){
    return axios.get(ATTENDANCE_URL+"/"+date)
  }
  updateAttendance(attendance){
    console.log(ATTENDANCE_URL,attendance)
    return axios.patch(ATTENDANCE_URL+"/",attendance)
  }

}
export default new AttendanceService();
