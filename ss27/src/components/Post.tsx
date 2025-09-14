import React from "react";
import { NavLink } from "react-router-dom";
export default function Post() {
  const posts = [
    {
      id: 1,
      title: "React Router cơ bản",
      summary: "Giới thiệu về React Router",
    },
    {
      id: 2,
      title: "Hooks trong React",
      summary: "Cách dùng useState, useEffect",
    },
    { id: 3, title: "Tailwind CSS", summary: "Styling tiện lợi với Tailwind" },
    { id: 4, title: "Redux Toolkit", summary: "Quản lý state đơn giản hơn" },
    {
      id: 5,
      title: "TypeScript trong React",
      summary: "Tăng độ an toàn với TS",
    },
  ];
  return (
    <div>
      <h1>Danh sách bài viết</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.id} style={{ marginBottom: "10px" }}>
            <NavLink to={`/blog/posts/${p.id}`}>
              <strong>{p.title}</strong>
            </NavLink>
            <p>{p.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
