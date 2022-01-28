import axios from "axios";
import URL from "../URL/urls"

const REPORT_URL = URL.REPORT_URL() // http://localhost:8080/api/v1/attendance {data}
const DATE_REPORT = URL.DATE_REPORT()
const GET_ALL_NAME_AND_ID = URL.GET_ALL_NAME_AND_ID()

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

}
export default new ReportService();
