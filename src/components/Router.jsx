//import react
import { Suspense, lazy } from "react";

//import react router dom
import { Routes, Route } from "react-router-dom";

//import loader component
const Loader = () => <div>Loading...</div>;

//import private routes
import PrivateRoutes from "./PrivateRoutes";

//import view Login
const Login = lazy(() => import("../pages/Login.jsx"));
//import view dashboard
const Dashboard = lazy(() => import("../pages/Dashboard.jsx"));
const Booking = lazy(() => import("../pages/Booking.jsx"));
const Riwayat = lazy(() => import("../pages/Riwayat.jsx"));
const Chat = lazy(() => import("../pages/Chat.jsx"));
const DashboardAdmin = lazy(() => import("../pagesAdmin/DashboardAdmin.jsx"));
const BookingAdmin = lazy(() => import("../pagesAdmin/BookingAdmin.jsx"));
const RiwayatAdmin = lazy(() => import("../pagesAdmin/RiwayatAdmin.jsx"));
const ChatAdmin = lazy(() => import("../pagesAdmin/ChatAdmin.jsx"));
const SubmissionAdmin = lazy(() => import("../pagesAdmin/Submission.jsx"));
// users
import Home from "../pages/Home.jsx";

export default function RoutesIndex() {
  return (
    <Routes>
      {/* route "/" */}
      <Route path="/" element={<Home />} />

      {/* route "/login" */}
      <Route path="/login" element={<Login />} />

      {/* private route "/dashboard" */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoutes>
            <Suspense fallback={<Loader />}>
              <Dashboard />
            </Suspense>
          </PrivateRoutes>
        }
      />
      <Route
        path="/booking"
        element={
          <PrivateRoutes>
            <Suspense fallback={<Loader />}>
              <Booking />
            </Suspense>
          </PrivateRoutes>
        }
      />
      <Route
        path="/riwayat"
        element={
          <PrivateRoutes>
            <Suspense fallback={<Loader />}>
              <Riwayat />
            </Suspense>
          </PrivateRoutes>
        }
      />
      <Route
        path="/chat"
        element={
          <PrivateRoutes>
            <Suspense fallback={<Loader />}>
              <Chat />
            </Suspense>
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin/submission"
        element={
          <PrivateRoutes>
            <Suspense fallback={<Loader />}>
              <SubmissionAdmin />
            </Suspense>
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin"
        element={
          <PrivateRoutes>
            <Suspense fallback={<Loader />}>
              <DashboardAdmin />
            </Suspense>
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin/chat"
        element={
          <PrivateRoutes>
            <Suspense fallback={<Loader />}>
              <ChatAdmin />
            </Suspense>
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin/booking"
        element={
          <PrivateRoutes>
            <Suspense fallback={<Loader />}>
              <BookingAdmin />
            </Suspense>
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin/riwayat"
        element={
          <PrivateRoutes>
            <Suspense fallback={<Loader />}>
              <RiwayatAdmin />
            </Suspense>
          </PrivateRoutes>
        }
      />
    </Routes>
  );
}
