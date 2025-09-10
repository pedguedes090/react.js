import React from 'react'
import { useLocation, useParams } from 'react-router-dom';

export default function UserDetail() {
    const {id} = useParams();
    const location = useLocation();
    const user = location.state;
  return (
    <div>
      <h1>User Detail</h1>
      <p>ID: {id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Address: {user.address}</p>
    </div>
  )
}
