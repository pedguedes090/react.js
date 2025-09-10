import React, { use } from 'react'
import { useNavigate } from 'react-router';


export default function ListUser() {
const navigate = useNavigate();
    const User = [
        {id:1, name:"Nguyen Van A",email:"NguyenVanA@gmail.com" , address:"Ha Noi"},
        {id:2, name:"Nguyen Van B",email:"NguyenVanB@gmail.com" , address:"Ha Nam"},
        {id:3, name:"Nguyen Van C",email:"NguyenVanC@gmail.com" , address:"Ninh Binh"},
    ]
  return (
    <div className='flex'>
    {User.map((item)=>(
        <div className='border p-4 m-4 ' >
            <p> {item.id}</p>
            <h1>{item.name}</h1>
            <p>{item.email}</p>
            <p>{item.address}</p>
            <button className='btn border-2 rounded-[8px] w-max ' onClick={() => navigate(`/userdetail/${item.id}`, { state: item })}>Xem chi tiet</button>
        </div>
    ))}
    </div>
  )
}
