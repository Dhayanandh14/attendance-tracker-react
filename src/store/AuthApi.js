import React from 'react'
import UserService from '../Services/UserService'

function AuthApi() {
  let userList = []
  UserService.getUsers().then((res) => {
    // console.log(res.data)
    userList.push(res.data)
  });
  return (
    <div>

    </div>
  )
}

export default AuthApi
