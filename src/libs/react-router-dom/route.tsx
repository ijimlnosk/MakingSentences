import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../../layout/layout";
import Home from "../../page/home";
import ProblemList from "../../page/problem-list";
import CreateProblem from "../../page/create-problem";
import ProblemDetail from "../../page/problem-detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "problem-list",
        element: <ProblemList />,
      },
      {
        path: "create-problem",
        element: <CreateProblem />,
      },
      {
        path: "problem-detail/:id",
        element: <ProblemDetail />,
      },
    ],
  },
]);
export default router;
