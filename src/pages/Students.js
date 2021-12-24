
import UserService from '../Services/UserService';

import './Students.css'


import React, { Component } from 'react';
import StudentService from '../Services/StudentService';

class Students extends Component {
  constructor(props) {
    super(props);
    this.state={
      users:[],
      studentDetails:[],
      totalDetails:"",
      student_name:"",
      student_accessId:"",
      student_email:""
    }

    this.addStudents = this.addStudents.bind(this)
    this.addStudentName = this.addStudentName.bind(this)
    this.addStudentAccessId = this.addStudentAccessId.bind(this)
    this.addStudentEmail = this.addStudentEmail.bind(this)
    // this.fetch = this.fetch.bind(this)
  }
  componentDidMount(){
      StudentService.getStudents().then((res) => {
          this.setState({ users: res.data});
      });
      // StudentService.getStudentDetails().then((res) => {
      //   this.setState({ studentDetails: res.data});
      // })
      // totalDetails = this.state.users.concat(this.state.studentDetails)

    }

    // fetch(){
    //   UserService.getUsers().then((res) => {
    //     this.setState({ users: res.data});
    //   });
    // }
    addStudentName(event){
      this.setState({student_name:event.target.value})
      console.log(event.target.value)
    }
    addStudentAccessId(event){
      this.setState({student_accessId:event.target.value})
      console.log(event.target.value)
    }
    addStudentEmail(event){
      this.setState({student_email:event.target.value})
      console.log(event.target.value)
    }

    addStudents(){
      // let totalDetails = this.state.users.concat(this.state.studentDetails)
      // console.log(totalDetails.map(i => i))
      let users = {user_name: this.state.student_name, user_email:this.state.student_email, access_id:this.state.student_accessId,role:"student"}
      console.log("Users =>"+JSON.stringify(users))
        UserService.createUsers(users).then((res=>{
          console.log(users)
          // this.fetch()
      }))

      //  this.componentDidMount()
      this.setState({student_email:""})
      this.setState({student_name:""})
      this.setState({student_accessId:""})
    }
  render() {
    return (
      <div className="App">

    <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Add Students
    </button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <input type="text" value={this.state.student_name} onChange={this.addStudentName} placeholder='Enter Student Name'/>
      <input type="text" value={this.state.student_accessId}  onChange={this.addStudentAccessId} placeholder='Enter Student Access Id'/>
      <input type="text" value={this.state.student_email}  onChange={this.addStudentEmail} placeholder='Enter Student Email'/>

      <button onClick={this.addStudents}>Add</button>

    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>
</div>







<table class="table">
  <thead>
    <tr>
      <th scope="col">NO.</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    {this.state.users.map((user) =>
     <tr>
     <React.Fragment>
        <th scope="row">{user.user_id}</th>
        <td>{user.user_name}</td>
        <td> {user.user_email}</td>
        <td> {user.role}</td>
        </React.Fragment>
      </tr>

      )}
  </tbody>
</table>

      </div>
    );
  }
}

export default Students;


// const Students = () => {
//   let users=[];
//   let emailFinder,gettableObject;

//   useEffect(() => {
//     fetch("http://localhost:8080/api/v1/users").then(res => {
//       return res.json()
//     }).then((data) => {users.push(data)})
//     console.log(users)
//   }, [])






//   return (
//     <div className="App">
//       <button className="btn btn-warning">Add Students</button>
//       <h1>{users.length}</h1>

//       <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//       Launch demo modal
//       </button>


//     <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//     <div className="modal-dialog">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
//           <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//         </div>
//         <div className="modal-body">
//           ...
//         </div>
//         <div className="modal-footer">
//           <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//           <button type="button" className="btn btn-primary">Save changes</button>
//         </div>
//       </div>
//     </div>
//     </div>
//     </div>
//   );
// }

// export default Students;
