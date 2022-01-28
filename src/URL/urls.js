const API_BASE_URL = "http://localhost:8080/api/v1/";
class URL {



  //USER SERVICE
  USERS_API_BASE_URL(){
    return `${API_BASE_URL}users`;
  }
  USERS_URL(){
    return `${API_BASE_URL}signin`;
  }
  USER_ID_URL(){
    return `${API_BASE_URL}users_id`
  }


  //STUDENT SERVICE
  STUDENTS_API_BASE_URL() {
    return `${API_BASE_URL}student_details`;
  }
  STUDENTS_URL() {
    return `${API_BASE_URL}students`;
  }
  USERS_DETAILS_DTO() {
    return `${API_BASE_URL}user-students`;
  }
  STUDENT_INFO_URL() {
    return `${API_BASE_URL}student_info`;
  }




  //COACH SERVICE
  COACH_DETAILS_URL() {
    return `${API_BASE_URL}coach_details`;
  }
  COACH_DTO_URL() {
    return `${API_BASE_URL}user-coaches`;
  }
  COACH_INFO_URL() {
    return `${API_BASE_URL}coach-info`;
  }



  //ATTENDANCE SERVICE
  ATTENDANCE_URL() {
    return `${API_BASE_URL}attendance`;
  }



  // REPORT SERVICE
  GET_ALL_NAME_AND_ID() {
    return `${API_BASE_URL}get-all-names-and-id`;
  }
  DATE_REPORT() {
    return `${API_BASE_URL}report-date-range`;
  }
  REPORT_URL() {
    return `${API_BASE_URL}report-by-name`;
  }
}

export default new URL();
