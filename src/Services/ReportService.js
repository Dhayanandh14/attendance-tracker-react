import axios from "axios";


const API_BASE_URL = "https://attendance-tracker-springboot.herokuapp.com/api/v1/"


const REPORT_URL = `${API_BASE_URL}report-by-name` // http://localhost:8080/api/v1/attendance {data}
const DATE_REPORT = `${API_BASE_URL}report-date-range`
const GET_ALL_NAME_AND_ID = `${API_BASE_URL}get-all-names-and-id`

class AttendanceService {
  getReportByName(id){
    return axios.get(REPORT_URL+"/"+id);
  }
  getReportByDateWise(date,date2){
    return axios.get(DATE_REPORT+"/"+date+"/"+date2);
  }
  getAllNamesAndId(){
    return axios.get(GET_ALL_NAME_AND_ID)
  }

}
export default new AttendanceService();
