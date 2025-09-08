import React from "react";
import { Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

export default function Bai4() {
  const items = [
    {
      key: "1",
      label: "Cài đặt",
    },
    {
      key: "2",
      label: "Đổi mật khẩu",
    },
    {
      key: "3",
      label: "Đăng xuất",
    },
  ];

  return (
    <Dropdown menu={{ items }} placement="bottomLeft">
      <Button>
        Nguyễn Văn Nam <DownOutlined />
      </Button>
    </Dropdown>
  );
}
