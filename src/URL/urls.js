const API_BASE_URL = "http://localhost:8080/api/v1/";
// const API_BASE_URL = "https://attendance-tracker-springboot.herokuapp.com/api/v1/";
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
  STUDENT_COUNT_URL(){
    return `${API_BASE_URL}student_count`
  }
  COACH_COUNT(){
    return `${API_BASE_URL}coach_count`;
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
  ATTENDANCE_PERCENTAGE_URL(){
    return `${API_BASE_URL}total-student-attendance-count`
  }
  EACH_DAY_ATTENDANCE_PERCENTAGE(){
    return `${API_BASE_URL}full-month-attendance`
  }
  EACH_DAY_ATTENDANCE_ABSENT_PERCENTAGE(){
    return `${API_BASE_URL}full-month-attendance-absent-count`
  }
  EVERYDAY_ATTENDANCE_PRESENT_STATUS_COUNT(){
    return `${API_BASE_URL}everyday_attendance_status_count`
  }
  EVERYDAY_ATTENDANCE_ABSENT_STATUS_COUNT(){
    return `${API_BASE_URL}everyday_attendance_status_absent_count`
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
  GET_ALL_NAMES_BY_DATE(){
    return `${API_BASE_URL}reports-by-name-and-date`
  }
  GET_ATTENDANCE_COUNT_BY_NAME_AND_DATE_REPORT(){
    return `${API_BASE_URL}reports-by-status-count-and-date`
  }
}

export default new URL();
