import axios from "axios";
import URL from "../URL/urls"

const REPORT_URL = URL.REPORT_URL() // http://localhost:8080/api/v1/attendance {data}
const DATE_REPORT = URL.DATE_REPORT()
const GET_ALL_NAME_AND_ID = URL.GET_ALL_NAME_AND_ID()
const GET_ALL_NAMES_BY_DATE = URL.GET_ALL_NAMES_BY_DATE();
const GET_ATTENDANCE_COUNT_BY_NAME_AND_DATE_REPORT = URL.GET_ATTENDANCE_COUNT_BY_NAME_AND_DATE_REPORT()

class ReportService {
  getReportByName(id){
    return axios.get(REPORT_URL+"/"+id);
  }
  getReportByDateWise(date,date2){
    return axios.get(DATE_REPORT+"/"+date+"/"+date2);
  }
  getAllNamesAndId(){
    return axios.get(GET_ALL_NAME_AND_ID)
  }
  getAllNamesByDate(id,date,date2){
    return axios.get(GET_ALL_NAMES_BY_DATE+"/"+id+"/"+date+"/"+date2)
  }
  getAttendanceCountByNameAndDate(id,date,date2){
    return axios.get(GET_ATTENDANCE_COUNT_BY_NAME_AND_DATE_REPORT+"/"+id+"/"+date+"/"+date2)
  }

}
export default new ReportService();
