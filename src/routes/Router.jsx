import { createBrowserRouter } from "react-router-dom";
import  Error404  from "../components/pages/Error404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/productos",
        element: <Products />,
      }
    ]
  }
]);
