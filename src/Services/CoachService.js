import axios from "axios";

const COACH_API_BASE_URL = "http://localhost:8080/api/v1/coach_details"


class CoachService{
  getCoachDetails(){
    return axios.get(COACH_API_BASE_URL);
  }
  createCoach(details){
    return axios.post(COACH_API_BASE_URL,details)
  }

}

export default new CoachService()
