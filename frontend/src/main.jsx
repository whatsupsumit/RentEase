import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "./store/store";
import { Provider } from "react-redux";
const queryClient = new QueryClient();

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import PageNotFound from "./pages/PageNotFound";
import { GlobalWrapper } from "./pages/GlobalWrapper";

// Import new RentEase pages
import RentEaseHomePage from "./pages/RentEaseHomePage";
import BrowseRentals from "./pages/BrowseRentals";
import MyRentals from "./pages/MyRentals";
import PostRental from "./pages/PostRental";
import PostRequest from "./pages/PostRequest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalWrapper />,
    children: [
      {
        path: "/",
        element: <RentEaseHomePage />,
      },
      {
        path: "/browse",
        element: <BrowseRentals />,
      },
      {
        path: "/my-rentals",
        element: <MyRentals />,
      },
      {
        path: "/post-rental",
        element: <PostRental />,
      },
      {
        path: "/post-request",
        element: <PostRequest />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
