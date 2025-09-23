import type { Student } from "../utils/types";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import Toolbar from "../components/Toolbar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const StudentManagement = () => {
  const [students, setStudents] = useState<Student[]>([]);

  const student = useSelector((state: any) => state.students);
  const dispatch = useDispatch();
  useEffect(() => {
    setStudents(student);
  }, [student]);

  const [editingStudent, setEditingStudent] = useState<Student | null>(null);

  const handleAddStudent = (student: Student) => {
    if (editingStudent) {
      dispatch({
        type: "edit",
        payload: student,
      });
      setEditingStudent(null);
    } else {
      dispatch({
        type: "add",
        payload: student,
      });
    }
  };
  const handleSearch = (keyword: string) => {
    if (keyword.trim().length === 0) {
      dispatch({ type: "display" });
    } else {
      dispatch({
        type: "search",
        payload: keyword,
      });
    }
  };

  const handleDelete = (id: string) => {
    if (confirm("Bạn có chắc chắn muốn xoá!"))
      dispatch({
        type: "delete",
        payload: id,
      });
  };

  const handleEdit = (student: Student) => {
    setEditingStudent(student);
  };

  return (
    <div className="flex gap-6 p-6">
      <div className="flex-1">
        <Toolbar onSearch={handleSearch} />
        <StudentList
          students={students}
          handleDelele={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
      <StudentForm
        onSubmit={handleAddStudent}
        student={editingStudent}
        students={students}
      />
    </div>
  );
};

export default StudentManagement;
