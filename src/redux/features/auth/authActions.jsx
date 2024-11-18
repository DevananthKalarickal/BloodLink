// authActions.jsx

import { createAsyncThunk } from "@reduxjs/toolkit";

// Custom alert function to simulate an alert that disappears after 1 second
const showAlert = (message) => {
  // Create an alert div dynamically
  const alertDiv = document.createElement("div");
  alertDiv.textContent = message;
  alertDiv.style.position = "fixed";
  alertDiv.style.top = "20px";
  alertDiv.style.left = "50%";
  alertDiv.style.transform = "translateX(-50%)";
  alertDiv.style.padding = "10px 20px";
  alertDiv.style.backgroundColor = "#f44336"; // Red background
  alertDiv.style.color = "white";
  alertDiv.style.borderRadius = "5px";
  alertDiv.style.zIndex = 9999;

  document.body.appendChild(alertDiv);

  // Hide the alert after 1 second
  setTimeout(() => {
    alertDiv.style.display = "none";
  }, 1000);
};

// Simulate user registration (no API call)
export const userRegister = createAsyncThunk(
  "auth/register",
  async (
    {
      name,
      role,
      email,
      password,
      phone,
      organisationName,
      address,
      hospitalName,
      website,
    },
    { dispatch }
  ) => {
    try {
      // Check if user with the same email already exists
      const existingUser = JSON.parse(localStorage.getItem("users")) || [];
      const userExists = existingUser.find(user => user.email === email);

      if (userExists) {
        showAlert("User already exists with this email.");
        return;
      }

      // Simulate a successful registration response
      const newUser = {
        name,
        role,
        email,
        password, // In a real app, don't store plain passwords, use encryption
        phone,
        organisationName,
        address,
        hospitalName,
        website,
      };

      // Save new user data in localStorage
      existingUser.push(newUser);
      localStorage.setItem("users", JSON.stringify(existingUser));

      console.log("User Registered:", newUser);

      showAlert("User Registered Successfully");

      // Redirect to login page
      window.location.replace("/login");

    } catch (error) {
      console.error(error);
      showAlert(error.message || "Registration failed");
    }
  }
);

// Simulate user login and validate credentials
export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { dispatch }) => {
    try {
      // Retrieve users from localStorage
      const users = JSON.parse(localStorage.getItem("users")) || [];

      // Find the user based on the email
      const user = users.find(user => user.email === email);

      if (!user) {
        showAlert("No user found with this email.");
        return;
      }

      // Check if the password matches
      if (user.password !== password) {
        showAlert("Incorrect password.");
        return;
      }

      // Simulate successful login by saving token and user data to localStorage
      const token = "your-auth-token-here"; // In a real app, this would be a JWT token or session ID
      localStorage.setItem("token", token);
      localStorage.setItem("currentUser", JSON.stringify(user));

      console.log("User Logged In:", user);

      showAlert("Login Successful");

      // Redirect to homepage or dashboard
      window.location.replace("/home");

    } catch (error) {
      console.error(error);
      showAlert(error.message || "Login failed");
    }
  }
);

// Simulate fetching current user from localStorage
export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, { dispatch }) => {
    try {
      // Retrieve the current user from localStorage
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));

      if (!currentUser) {
        showAlert("No user is logged in.");
        return;
      }

      console.log("Current User:", currentUser);

      return currentUser;

    } catch (error) {
      console.error(error);
      showAlert(error.message || "Failed to fetch current user.");
    }
  }
);

// Named export for addBloodRecord
export const addBloodRecord = (record) => ({
  type: "ADD_BLOOD_RECORD",
  payload: record,
});
