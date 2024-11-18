import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // If token exists, redirect to HomePage
  if (token) {
    return <Navigate to="/home" />;
  }

  // If no token, allow access to public route (login/register)
  return children;
};

export default PublicRoute;
