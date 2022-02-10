import React, {useEffect, useState} from "react";

function Auth() {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")));
  console.log(users)

  useEffect(()=>{
    let usersFromLs= JSON.parse(localStorage.getItem("users"))
    console.log(usersFromLs)
  })

  const checkUser = (e) => {
    e.preventDefauld();
    users.forEach((user)=>{
      if()
    })
  }
  return <div>Auth</div>;
}

export default Auth;
