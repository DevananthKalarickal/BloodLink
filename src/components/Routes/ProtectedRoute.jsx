import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../../redux/features/auth/authActions";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  // Fetch current user from localStorage
  const getUserFromLocalStorage = () => {
    try {
      // Check if there is a user and token in localStorage
      const user = JSON.parse(localStorage.getItem("currentUser"));
      const token = localStorage.getItem("token");

      if (user && token) {
        // Dispatch action to store the current user in Redux
        dispatch(getCurrentUser(user));
      } else {
        // If there's no user or token, redirect to login
        return false;
      }
    } catch (error) {
      console.error("Error fetching user from localStorage:", error);
      localStorage.clear(); // Clear localStorage if an error occurs
      return false;
    } finally {
      setIsLoading(false); // Set loading to false after checking
    }
  };

  useEffect(() => {
    getUserFromLocalStorage(); // Fetch the user when the component mounts
  }, []);

  // If loading, you can show a loading spinner or message
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Check if the token exists in localStorage
  if (localStorage.getItem("token")) {
    return children; // If token exists, render protected content
  } else {
    return <Navigate to="/login" />; // If token is not found, redirect to login
  }
};

export default ProtectedRoute;