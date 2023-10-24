import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import Posts from "../pages/PostsPages/ui/Posts";
import { Provider } from "react-redux";
import { setupStore } from "./store";
import Post from "../pages/PostPage/ui/Post";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="posts" />,
    },
    {
      path: "posts",
      element: <Posts />,
    },
    {
      path: "posts/:postId",
      element: <Post />,
    },
  ]);

  const store = setupStore();
  
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
