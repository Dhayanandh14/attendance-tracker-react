import axios from "axios";

const COACH_API_BASE_URL = "http://localhost:8080/api/v1/coach_details"
const COACH_DTO_URL = "http://localhost:8080/api/v1/user-coaches";

class CoachService{
  getCoachDetails(){
    return axios.get(COACH_API_BASE_URL);
  }
  createCoachDetails(details){
    return axios.post(COACH_API_BASE_URL,details)
  }
  getAllCoachDetails(){
    return axios.get(COACH_DTO_URL)
  }
  getCoachInfoById(id){
    return axios.get("http://localhost:8080/api/v1/coach-info"+"/"+id)
  }
  editCoachDetails(id,coachInfo){
    return axios.patch("http://localhost:8080/api/v1/coach-info"+"/"+id,coachInfo)
  }

}

export default new CoachService()
