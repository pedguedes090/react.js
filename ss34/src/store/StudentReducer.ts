import type { Student } from "../utils/types";

const initStudent: Student[] = [
  { id: "SV001", name: "Nguyễn Văn A", age: 20, gender: "Nam" },
  { id: "SV002", name: "Nguyễn Văn B", age: 21, gender: "Nữ" },
  { id: "SV003", name: "Nguyễn Văn C", age: 19, gender: "Nam" },
];

type ActionType = {
  type: string;
  payload: unknown;
};

const initialState = {
  students: initStudent,
  allStudents: initStudent,
};

export const StudentReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "display":
      return {
        ...state,
        students: state.allStudents,
      };

    case "search":
      const keyword = String(action.payload).toLowerCase();
      const filtered = state.allStudents.filter((element) =>
        element.name.toLowerCase().includes(keyword)
      );
      return {
        ...state,
        students: filtered,
      };

    case "delete":
      const updatedAll = state.allStudents.filter(
        (element) => element.id !== action.payload
      );
      return {
        ...state,
        allStudents: updatedAll,
        students: updatedAll,
      };
    case "add":
      const newStudent = action.payload as Student;
      return {
        ...state,
        allStudents: [...state.allStudents, newStudent],
        students: [...state.allStudents, newStudent],
      };
    case "edit":
      const updatedStudent = action.payload as Student;
      const updatedAllStudents = state.allStudents.map((s) =>
        s.id === updatedStudent.id ? updatedStudent : s
      );
      return {
        ...state,
        allStudents: updatedAllStudents,
        students: updatedAllStudents,
      };
    default:
      return state;
  }
};
