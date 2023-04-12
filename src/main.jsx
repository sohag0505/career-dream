import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import Error from "./components/Error/Error";
import FeatureDetails from "./components/FeatureDetails/FeatureDetails";
import Home from "./components/Home/Home";
import Job from "./components/Job/Job";
import Main from "./components/Layout/Main";
import Statistics from "./components/Statistics/Statistics";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "*",
        element: <Error></Error>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "job",
        element: <Job></Job>,
      },
      {
        path: "featureDetails/:jobId",
        element: <FeatureDetails></FeatureDetails>,
        loader: async ({ params }) => {
          const dataJSON = await fetch("application.json");
          const data = await dataJSON.json();
          const exits = await data.find(
            (job) => job.id === parseInt(params.jobId)
          );

          return exits;
        },
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
