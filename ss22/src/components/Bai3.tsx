import React from "react";
import { Card, Button } from "antd";



const { Meta } = Card;

export default function Bai3() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <Card
        hoverable
        style={{ width: 300 }}
        cover={
          <img
            alt="MacBook Air 2018"
            
          />
        }
      >
        <Meta
          title="MacBook Air 2018"
          description="The reason I am selling the machine is because it is too much power for what I need"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
          <Button type="primary">Xem chi tiết</Button>
          <span>30.000.000 đ</span>
        </div>
      </Card>

      <Card
        hoverable
        style={{ width: 300 }}
        cover={
          <img
            alt="MacBook Pro 2019"
            
          />
        }
      >
        <Meta
          title="MacBook Pro 2019"
          description="The reason I am selling the machine is because it is too much power for what I need"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
          <Button type="primary">Xem chi tiết</Button>
          <span>30.000.000 đ</span>
        </div>
      </Card>
    </div>
  );
}
