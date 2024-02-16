import { createBrowserRouter } from "react-router-dom";
import { Root } from "./routes/Root.route";
import { ErrorPage } from "./routes/Error.route";
import { Greet } from "./routes/Greet.route";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "greet/:name",
        element: <Greet />,
      },
    ],
  },
]);
