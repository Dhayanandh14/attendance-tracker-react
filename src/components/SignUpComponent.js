import React, { Component } from 'react'
import UserService from '../Services/UserService';

export default class SignUpComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      // id: this.props.match.params.id,
      user_name: '',
      user_email: '',
      password:''
    }
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  // componentDidMount(){
  //   console.log(this.state)
  // }


  changeNameHandler(event){
    this.setState({user_name:event.target.value})
  }
  changeEmailHandler(event){
    this.setState({user_email:event.target.value})
  }
  changePasswordHandler(event){
    this.setState({password:event.target.value})
  }

  signUp(event){
    event.preventDefault()
    let users = {user_name: this.state.user_name,user_email:this.state.user_email,password:this.state.password}
    console.log("Users =>"+JSON.stringify(users))
      UserService.createUsers(users).then((res=>{
        console.log(users)
      this.props.history.push('/')

    }))
  }



  render() {
    return (
      <div>
      <form>
          <input type="text" name="" value={this.state.name} onChange={this.changeNameHandler}  id=""/>
          <input type="email" name="" value={this.state.email} onChange={this.changeEmailHandler} id=""/>
          <input type="password" name="" value={this.state.password} onChange={this.changePasswordHandler} id=""/>
          <button onClick={this.signUp}>SignUp</button>
          </form>
      </div>
    )
  }
}
