import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllUsersList from "./pages/AllUsersList/AllUsersList";
import Dashboard from "./pages/Dashboard/Dashboard";
import Posts from "./pages/Posts";
import Gallery from "./pages/Gallery";
import Todo from "./pages/Todo";
import AuthRoutes from "./components/AuthRoute";
import ProtectedRoutes from "./components/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";
import Chats from "./components/Chats/Chats";

export default function App() {
  const { userInfo } = useSelector((state) => state.user);
  return (
    <Router>
      <ToastContainer />
      <div>
        <Routes>
          <Route element={<AuthRoutes />}>
            <Route path="/" element={<AllUsersList />} />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/todo" element={<Todo />} />
          </Route>
        </Routes>
      </div>

      {userInfo && <div className="d-flex justify-content-end"><Chats /></div>}
    </Router>
  );
}
