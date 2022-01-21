import axios from "axios";

const COACH_API_BASE_URL = "https://attendance-tracker-springboot.herokuapp.com/api/v1/coach_details"
const COACH_DTO_URL = "https://attendance-tracker-springboot.herokuapp.com/api/v1/user-coaches";

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
    return axios.get("https://attendance-tracker-springboot.herokuapp.com/api/v1/coach-info"+"/"+id)
  }
  editCoachDetails(id,coachInfo){
    return axios.patch("https://attendance-tracker-springboot.herokuapp.com/api/v1/coach-info"+"/"+id,coachInfo)
  }

}

export default new CoachService()
