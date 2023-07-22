import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedRoutes() {
  const { userInfo } = useSelector((state) => state?.user);
  console.log("userinfo", userInfo)
  return userInfo ? <Outlet /> : <Navigate to="/" />;
}
