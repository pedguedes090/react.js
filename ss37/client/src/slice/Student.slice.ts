import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


interface Student {
  id: string;
  name: string;
  age: number;
  grade: string;
}
export const fetchStudent = createAsyncThunk(
  "students/fetchStudent",
  async ()=>{
    try{
      const res = await axios.get("http://localhost:3000/student")
      const students:Student[] = res.data ||[]
      return students
    }catch(error){
      console.log(error)
    }
  }
)
export const addStudent = createAsyncThunk(
  "students/addStudent",
  async (newStudent:Student)=>{
    try{
      const res = await axios.post("http://localhost:3000/student", newStudent)
      const student:Student = res.data
      return student
    }catch(error){
      console.log(error)
    }
  }
)
export const updateStudent = createAsyncThunk(
  "students/updateStudent",
  async (updatedStudent:Student)=>{
    try{
      const res = await axios.put(`http://localhost:3000/student/${updatedStudent.id}`, updatedStudent)
      const student:Student = res.data
      return student
    }catch(error){
      console.log(error)
    }
  }
)
export const deleteStudent = createAsyncThunk(
  "students/deleteStudent",
  async (studentId:string)=>{
    try{
      await axios.delete(`http://localhost:3000/student/${studentId}`)
      return studentId
    }catch(error){
      console.log(error)
    }
  }
)
const studentSlice = createSlice({
  name: "Student",
  initialState: {
    Student: [] as Student[],
    loading: false,
  },
  reducers:{},
  extraReducers:(builder)=>{
    builder
      .addCase(fetchStudent.pending,(state)=>{
        state.loading=true
      })
      .addCase(fetchStudent.fulfilled,(state,action)=>{
        state.loading =false
        state.Student = action.payload ||[]
      })
      .addCase(fetchStudent.rejected,(state)=>{
        state.loading =false
      })
      .addCase(addStudent.pending,(state)=>{
        state.loading=true
      })
      .addCase(addStudent.fulfilled,(state,action)=>{
        state.loading =false
        if(action.payload){
          state.Student.push(action.payload)
        }
      })
      .addCase(addStudent.rejected,(state)=>{
        state.loading =false
      })
      .addCase(updateStudent.pending,(state)=>{
        state.loading=true
      })
      .addCase(updateStudent.fulfilled,(state,action)=>{
        state.loading =false
        state.Student = state.Student.filter(s => s.id !== String(action.payload))
      })
      .addCase(updateStudent.rejected,(state)=>{
        state.loading =false
      })
      .addCase(deleteStudent.pending,(state)=>{
        state.loading=true
      })
      .addCase(deleteStudent.fulfilled,(state,action)=>{
        state.loading =false
        if(action.payload){
          state.Student = state.Student.filter(s => s.id !== action.payload)
        }
      })
      .addCase(deleteStudent.rejected,(state)=>{
        state.loading =false
      })
  }
});

export default studentSlice.reducer;