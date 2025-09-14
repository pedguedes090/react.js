import React from "react";
import { useParams } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "React Router cơ bản",
    content: "Nội dung chi tiết bài 1...",
  },
  { id: 2, title: "Hooks trong React", content: "Nội dung chi tiết bài 2" },
  { id: 3, title: "Tailwind CSS", content: "Nội dung chi tiết bài 3" },
  { id: 4, title: "Redux Toolkit", content: "Nội dung chi tiết bài 4" },
  {
    id: 5,
    title: "TypeScript trong React",
    content: "Nội dung chi tiết bài 5...",
  },
];

export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return <div>Bài viết không tồn tại</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
