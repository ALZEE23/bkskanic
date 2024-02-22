//import react
import { lazy } from "react";

//import react router dom
import { Routes, Route } from "react-router-dom";

//import loader component
// const Loader = lazy(() => import("../components/Loader.jsx"));

//import view Login
const Login = lazy(() => import("../pages/Login.jsx"));

//import private routes
import PrivateRoutes from "./PrivateRoutes";

//import view dashboard
const Dashboard = lazy(() => import("../pages/Dashboard.jsx"));

// users


import Home from "../pages/Home.jsx";

export default function RoutesIndex() {
  return (
    <Routes>
      {/* route "/" */}
      <Route
        path="/"
        element={
          //   <Suspense fallback={<Loader />}>
          <Home />
          //   </Suspense>
        }
      />

      {/* route "/login" */}
      <Route
        path="/login"
        element={
          //   <Suspense fallback={<Loader />}>
          <Login />
          //   </Suspense>
        }
      />

      {/* private route "/dashboard" */}
      <Route
        path="/dashboard"
        element={
          //   <Suspense fallback={<Loader />}>
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
          /* </Suspense> */
        }
      />
    </Routes>
  );
}