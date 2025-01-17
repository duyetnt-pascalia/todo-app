import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Header from "./component/Header";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import ProtectedRoute from "./component/ProtectedRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route
        path="auth"
        element={<ProtectedRoute element={<Auth />} />}
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
