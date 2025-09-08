import React from "react";
import { Input } from "antd";

export default function Bai2() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
      <Input size="large" placeholder="Input cỡ lớn" />
      <Input size="middle" placeholder="Input cỡ trung bình" />
      <Input size="small" placeholder="Input cỡ bé" />
    </div>
  );
}
