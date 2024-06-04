import HomePage from "./pages/homePage/homePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./pages/listPage/ListPage";
import { Layout, RequireAuth } from "./pages/layout/Layout";
import SinglePage from "./pages/singlePage/SinglePage";
import Login from "./pages/login/Login";
import ProfilePage from "./pages/profilePage/ProfilePage";
import Register from "./pages/register/Register";
import UpdateProfilePage from "./pages/updateProfilePage/UpdateProfilePage";
import NewPostPage from "./pages/newPostPage/newPostPage";

function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/profile/update",
          element: <UpdateProfilePage />,
        },
        {
          path: "/add",
          element: <NewPostPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routers} />;
}

export default App;
