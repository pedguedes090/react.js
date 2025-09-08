import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function Bai6() {
  const blueIcon = <LoadingOutlined style={{ fontSize: 40, color: "blue" }} spin />;
  const grayIcon = <LoadingOutlined style={{ fontSize: 40, color: "gray" }} spin />;
  const greenIcon = <LoadingOutlined style={{ fontSize: 40, color: "green" }} spin />;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        width: 400,
        alignItems: "center",
        justifyContent: "center",
        padding: "20px"
      }}
    >
      <Spin indicator={blueIcon} />
      <Spin indicator={grayIcon} />
      <Spin indicator={greenIcon} />
    </div>
  );
}
