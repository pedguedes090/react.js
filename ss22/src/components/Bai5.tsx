import React from "react";
import { Alert } from "antd";

export default function Bai5() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: 400 }}>
      <Alert
        message="Thêm tài khoản thành công."
        type="success"
        closable
      />
      <Alert
        message="Thêm mới tài khoản thất bại."
        type="error"
        closable
      />
      <Alert
        message="Tên không được để trống."
        type="warning"
        closable
      />
    </div>
  );
}
