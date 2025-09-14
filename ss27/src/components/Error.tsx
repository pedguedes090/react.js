import React from "react";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Trang khong ton tai</h1>
      <button onClick={() => navigate(-1)}>Quay lai</button>
    </>
  );
}
