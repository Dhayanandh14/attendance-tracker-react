import axios from "axios";
import URL from "../URL/urls"

const ATTENDANCE_URL = URL.ATTENDANCE_URL()

class AttendanceService {
  getAttendance(){
    return axios.get(ATTENDANCE_URL);
  }
  createAttendance(attendance) {
    return axios.post(ATTENDANCE_URL, attendance);
  }
  getAttendanceByDate(date){
    return axios.get(ATTENDANCE_URL+"/"+date)
  }
  updateAttendance(attendance){
    return axios.patch(ATTENDANCE_URL+"/",attendance)
  }

}
export default new AttendanceService();
