import React, { Component } from 'react';
// import CoachService from '../Services/CoachService';
import UserService from '../Services/UserService';

class Coaches extends Component {
  constructor(props) {
    super(props);
    this.state={
      coaches:[],
      coachDetails:[],
      coach_name:"",
      coach_accessId:"",
      coach_email:""
    }
    this.addCoachName = this.addCoachName.bind(this);
    this.addCoachEmail = this.addCoachEmail.bind(this);
    this.addCoachAccessId = this.addCoachAccessId.bind(this);
    this.addCoach = this.addCoach.bind(this);

  }
    addCoachName(event){
      this.setState({coach_name:event.target.value})
      console.log(event.target.value)
    }

    addCoachEmail(event){
      this.setState({coach_email:event.target.value})
      console.log(event.target.value)
    }
    addCoachAccessId(event){
      this.setState({coach_accessId:event.target.value})
      console.log(event.target.value)
    }

    addCoach(){
      let coach = {coach_name: this.state.coach_name, coach_email:this.state.coach_email, coach_access_id:this.state.coach_accessId, role:"coach" }
      UserService.createUsers(coach).then((res=>{
        console.log(res)
      }))
    }


  render() {
    return (
      <div>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Add coach
      </button>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <input type="text" value={this.coach_name} onChange={this.addCoachName} placeholder='Enter Coach Name'/>

      <input type="text" value={this.coach_accessId}  onChange={this.addCoachAccessId} placeholder='Enter Coach Access Id'/>

      <input type="text" value={this.coach_email}  onChange={this.addCoachEmail} placeholder='Enter Coach Email'/>

      <button onClick={this.addCoach}>Add</button>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
      </div>
      </div>
    );
  }
}

export default Coaches;
