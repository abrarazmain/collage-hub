import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import PrivateRoute from "./PrivateRoute";
import SingleCollage from "../pages/SingleCollage/SingleCollage";
import Collages from "../pages/collages/Collages";
import AdmissionCollage from "../pages/admission/AdmissionCollage";
import SubmitCollage from "../pages/admission/SubmitCollage";
import MyCollage from "../pages/myCollage/MyCollage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "collages",
        element: <Collages></Collages>,
      },
      {
        path: "admission",
        element: <AdmissionCollage></AdmissionCollage>,
      },
      {
        path: "singleCollage/:id",
        element: (
          <PrivateRoute>
            <SingleCollage />
          </PrivateRoute>
        ),
      },
      {
        path: "myCollage",
        element: (
          <PrivateRoute>
            <MyCollage />
          </PrivateRoute>
        ),
      },
      {
        path: "submitCollage/:id",
        element: (
          <PrivateRoute>
            <SubmitCollage />
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
