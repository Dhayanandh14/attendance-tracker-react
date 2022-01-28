import axios from "axios";
import URL from "../URL/urls"

const COACH_DETAILS_URL = URL.COACH_DETAILS_URL()
const COACH_DTO_URL =URL.COACH_DTO_URL();
const COACH_INFO_URL = URL.COACH_INFO_URL();

class CoachService{
  getCoachDetails(){
    return axios.get(COACH_DETAILS_URL);
  }
  createCoachDetails(details){
    return axios.post(COACH_DETAILS_URL,details)
  }
  getAllCoachDetails(){
    return axios.get(COACH_DTO_URL)
  }
  getCoachInfoById(id){
    return axios.get(COACH_INFO_URL+"/"+id)
  }
  editCoachDetails(id,coachInfo){
    return axios.patch(COACH_INFO_URL+"/"+id,coachInfo)
  }

}

export default new CoachService()
