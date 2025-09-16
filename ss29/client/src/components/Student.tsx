import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

interface Student{
    id:number,
    name:string,
    address:string,
    phone:string,
    status:boolean,
    createdAt:string,
}

function Student() {
    const [StudentList, setStudentList] = useState<Student[]>([]);
    
    const getAllStudent = () => {
        fetch("http://localhost:8080/student")
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setStudentList(data);
        })
        .catch((err) => console.log(err));
    }
    
    const GetById = (id: number) => {
        axios.get(`http://localhost:8080/student/${id}`)
        .then((res) => console.log(res.data))
        .catch(() => console.log("Không tìm thấy bản ghi "))
    }
    
    const CreateStudent = () => {
        const id = StudentList[StudentList.length - 1].id + 1;
        const newStudent: Student = {
            id: id,
            name: "Nguyen hoang Ha5",
            address: "0o0o0o0",
            phone: "555-1234",
            status: true,
            createdAt: new Date().toISOString()
        }
        axios.post("http://localhost:8080/student", newStudent)
        .then((res) => {
            console.log(res.data);
            getAllStudent(); 
        })
        .catch((err) => console.log(err))
    }
    useEffect(() => {
        getAllStudent();
    }, []);
    const handelDelete = (id: number) => {
        axios.delete(`http://localhost:8080/student/${id}`)
        .then(() => {
            getAllStudent();
        })
        .catch((err) => console.log(err))
    }
    return (
        <div>
            <button onClick={() => GetById(1)}>Get Student by ID</button>
            <button onClick={CreateStudent}>Create Student</button>
            <div>
                <h2>Quản lý sinh viên </h2>
                <button>Thêm mới sinh viên </button>
            </div>
            <div>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>phone</th>
                        <th>Action</th>
                    </tr>
                    {StudentList.map(student => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.address}</td>
                            <td>{student.phone}</td>
                            <td><button onClick={() => handelDelete(student.id)}>Delete</button></td>
                        </tr>
                    ))}
                </table>
            </div>
            
        </div>
    )
}

export default Student
