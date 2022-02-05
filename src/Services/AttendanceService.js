import axios from "axios";
import URL from "../URL/urls"

const ATTENDANCE_URL = URL.ATTENDANCE_URL()
const ATTENDANCE_PERCENTAGE_URL = URL.ATTENDANCE_PERCENTAGE_URL()
const EACH_DAY_ATTENDANCE_PERCENTAGE = URL.EACH_DAY_ATTENDANCE_PERCENTAGE();
const EACH_DAY_ATTENDANCE_ABSENT_PERCENTAGE = URL.EACH_DAY_ATTENDANCE_ABSENT_PERCENTAGE()
const EVERYDAY_ATTENDANCE_PRESENT_STATUS_COUNT = URL.EVERYDAY_ATTENDANCE_PRESENT_STATUS_COUNT()
const EVERYDAY_ATTENDANCE_ABSENT_STATUS_COUNT = URL.EVERYDAY_ATTENDANCE_ABSENT_STATUS_COUNT()

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
  getAttendancePercentage(){
    return axios.get(ATTENDANCE_PERCENTAGE_URL)
  }
  getEachDayAttendancePercentage(date1,date2){
    return axios.get(EACH_DAY_ATTENDANCE_PERCENTAGE+"/"+date1+"/"+date2)
  }
  getEachDayAttendanceAbsentPercentage(date1,date2){
    return axios.get(EACH_DAY_ATTENDANCE_ABSENT_PERCENTAGE+"/"+date1+"/"+date2)
  }

  //every day attendace status count
  getEveryDayAttendancePresentCount(date){
    return axios.get(EVERYDAY_ATTENDANCE_PRESENT_STATUS_COUNT+"/"+date)
  }
  getEveryDayAttendanceAbsentCount(date){
    return axios.get(EVERYDAY_ATTENDANCE_ABSENT_STATUS_COUNT+"/"+date)
  }
}
export default new AttendanceService();
