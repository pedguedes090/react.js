import React from "react";
import { useSelector } from "react-redux";

interface User {
  id: string | number;
  name: string;
  gender: string;
  dateOfBirth: string;
  address: string;
}

interface RootState {
  user: User[];
}

export default function Profile() {
  const users = useSelector((state: RootState) => state.info);
  console.log(users);
  
  return (
    <div>
      <div>
        {users.map((user: User) => (
          <div key={user.id}>
            <div>ID: {user.id}</div>
            <div>Name: {user.name}</div>
            <div>Gender: {user.gender}</div>
            <div>Date of Birth: {user.dateOfBirth}</div>
            <div>Address: {user.address}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
