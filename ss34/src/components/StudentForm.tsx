import {
  Button,
  MenuItem,
  Select,
  TextField,
  type SelectChangeEvent,
} from "@mui/material";

import React, { useEffect } from "react";
import type { Student } from "../utils/types";

type Error = {
  id: boolean;
  name: boolean;
  age: boolean;
  birthday: boolean;
  hometown: boolean;
  address: boolean;
};

interface StudentFormProps {
  onSubmit: (student: Student) => void;
  student?: Student | null;
  students: Student[];
}

type InputChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;
type FormChangeEvent = InputChangeEvent | SelectChangeEvent;

const StudentForm: React.FC<StudentFormProps> = ({
  onSubmit,
  student,
  students,
}) => {
  const [form, setForm] = React.useState<Student>({
    id: "",
    name: "",
    age: 0,
    gender: "Nam",
    birthday: "",
    hometown: "",
    address: "",
  });

  const [errorStatus, setErrorStatus] = React.useState<Error>({
    id: false,
    name: false,
    age: false,
    birthday: false,
    hometown: false,
    address: false,
  });

  const getDate = () => new Date().toISOString().split("T")[0];
  const currentDate = getDate();

  useEffect(() => {
    if (student) {
      setForm({
        id: student.id ?? "",
        name: student.name ?? "",
        age: student.age ?? 0,
        gender: student.gender ?? "Nam",
        birthday: student.birthday ?? "",
        hometown: student.hometown ?? "",
        address: student.address ?? "",
      });
    }
  }, [student]);

  const handleChange = (e: FormChangeEvent) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = (): boolean => {
    const newErrors: Error = {
      id: false,
      name: false,
      age: false,
      birthday: false,
      hometown: false,
      address: false,
    };

    if (
      form.id.trim().length === 0 ||
      students.some((element) => element.id === form.id.trim())
    ) {
      newErrors.id = true;
    }

    if (
      form.name.trim().length === 0 ||
      students.some((element) => element.name.trim() === form.name.trim())
    ) {
      newErrors.name = true;
    }

    if (form.age < 0) {
      newErrors.age = true;
    }

    if (form.birthday && form.birthday > currentDate) {
      newErrors.birthday = true;
    }

    if (form.hometown?.trim().length === 0) {
      newErrors.hometown = true;
    }

    if (form.address?.trim().length === 0) {
      newErrors.address = true;
    }

    setErrorStatus(newErrors);
    return !Object.values(newErrors).some((val) => val === true);
  };

  const validateEdit = (): boolean => {
    const newErrors: Error = {
      id: false,
      name: false,
      age: false,
      birthday: false,
      hometown: false,
      address: false,
    };

    if (form.id.trim().length === 0) {
      newErrors.id = true;
    }
    if (form.name.trim().length === 0) {
      newErrors.name = true;
    }
    if (form.age < 0) {
      newErrors.age = true;
    }
    if (form.birthday && form.birthday > currentDate) {
      newErrors.birthday = true;
    }
    if (form.hometown?.trim().length === 0) {
      newErrors.hometown = true;
    }
    if (form.address?.trim().length === 0) {
      newErrors.address = true;
    }

    setErrorStatus(newErrors);
    return !Object.values(newErrors).some((val) => val === true);
  };

  const resetForm = () => {
    setForm({
      id: "",
      name: "",
      age: 0,
      gender: "Nam",
      birthday: "",
      hometown: "",
      address: "",
    });
  };

  const handleSubmit = () => {
    if (student) {
      if (!validateEdit()) return;
      onSubmit(form);
      resetForm();
      return;
    }

    if (!validate()) return;
    onSubmit(form);
    resetForm();
  };

  return (
    <div className="w-1/3 p-4 border rounded-xl shadow">
      <h2 className="font-semibold mb-4">
        {student ? "Chỉnh sửa sinh viên" : "Thông Tin Sinh Viên"}
      </h2>
      <div className="flex flex-col gap-4">
        <TextField
          label={errorStatus.id ? "Mã sinh viên không hợp lệ!" : "Mã sinh viên"}
          name="id"
          value={form.id || ""}
          onChange={handleChange}
          fullWidth
          error={errorStatus.id}
          disabled={!!student}
        />

        <TextField
          label={
            errorStatus.name ? "Tên sinh viên không hợp lệ!" : "Tên sinh viên"
          }
          name="name"
          value={form.name || ""}
          onChange={handleChange}
          fullWidth
          error={errorStatus.name}
        />

        <TextField
          label={errorStatus.age ? "Tuổi không được nhỏ hơn 0" : "Tuổi"}
          type="number"
          name="age"
          value={form.age}
          onChange={handleChange}
          fullWidth
          error={errorStatus.age}
        />

        <Select
          name="gender"
          value={form.gender || "Nam"}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="Nam">Nam</MenuItem>
          <MenuItem value="Nữ">Nữ</MenuItem>
        </Select>

        <TextField
          type="date"
          label={
            errorStatus.birthday
              ? "Ngày sinh không được lớn hơn hiện tại"
              : "Ngày sinh"
          }
          name="birthday"
          value={form.birthday || ""}
          onChange={handleChange}
          fullWidth
          InputLabelProps={{ shrink: true }}
          error={errorStatus.birthday}
        />

        <TextField
          label={
            errorStatus.hometown ? "Nơi sinh không được để trống" : "Nơi sinh"
          }
          name="hometown"
          value={form.hometown || ""}
          onChange={handleChange}
          fullWidth
          error={errorStatus.hometown}
        />

        <TextField
          label={
            errorStatus.address ? "Địa chỉ không được để trống" : "Địa chỉ"
          }
          name="address"
          value={form.address || ""}
          onChange={handleChange}
          fullWidth
          error={errorStatus.address}
        />

        <Button variant="contained" color="primary" onClick={handleSubmit}>
          {student ? "Lưu thay đổi" : "Thêm sinh viên"}
        </Button>
      </div>
    </div>
  );
};

export default StudentForm;
