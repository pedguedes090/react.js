import React from "react";
import { useSelector } from "react-redux";

export default function ListUser() {
  const listUser = useSelector((state: any) => state.info);

  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>gender</th>
            <th>dateOfBirth</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listUser.map((e: any) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.gender}</td>
              <td>{e.dateOfBirth}</td>
              <td>{e.address}</td>
              <td>
                <button>Sửa</button>
                <button>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
