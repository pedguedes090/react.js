import React from "react";
import { Button, Flex } from "antd";

const App: React.FC = () => (
  <Flex gap="small" wrap>
    <Button type="primary">Lưu</Button>
    <Button className="!bg-slate-500 !text-white">Huỷ</Button>
    <Button className="!bg-lime-700 !text-white">Thành Công</Button>
    <Button className="!bg-amber-400">Cảnh báo</Button>
    <Button className="!bg-red-700 !text-white">Báo lỗi</Button>
    <Button className="!bg-blue-300">Thông tin</Button>
     <Button type="link">Đường dẫn</Button>
  </Flex>
);

export default App;
