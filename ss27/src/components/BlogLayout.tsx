import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function BlogLayout() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex  gap-4">
        <div className="flex flex-column">
          MyBlog
          <ul>
            <li onClick={() => navigate("/blog/post")}>Post</li>
          </ul>
        </div>
        <Outlet />
      </div>
    </>
  );
}
