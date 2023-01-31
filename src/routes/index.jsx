import { createBrowserRouter } from "react-router-dom";
import * as Components from "../index/indexComponents";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Components.MainLayout />,
    errorElement: <Components.Error404 />,
    children: [
      {
        index: true,
        element: <Components.Home />,
      },      
      {
        path: "about",
        element: <Components.About />,
      },
    ],
  },
]);
