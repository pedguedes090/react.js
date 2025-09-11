import React from 'react'

export default function PrivateRoute() {
    const isAuth: boolean = true;
    localStorage.setItem("isAuth",JSON.stringify(isAuth));
  return (
    <div>
      
    </div>
  )
}