import { createBrowserRouter } from "react-router-dom";
import PostList from "../components/PostList";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <PostList />
    }
])

