import { userLogin, userRegister } from "../redux/features/auth/authActions";
import store from "../redux/features/auth/store";

export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!role || !email || !password) {
      return alert("Please provide all fields.");
    }

    // Dispatch user login action
    store.dispatch(userLogin({ email, password, role }));

    // Save login information in localStorage
    const userData = { email, role }; // Store only relevant user data (e.g., email and role)
    localStorage.setItem("user", JSON.stringify(userData)); // Store the user data as a string

  

  } catch (error) {
    console.log(error);
  }
};

export const handleRegister = (
  e,
  name,
  role,
  email,
  password,
  phone,
  organisationName,
  address,
  hospitalName,
  website
) => {
  e.preventDefault();
  try {
    // Dispatch user register action
    store.dispatch(
      userRegister({
        name,
        role,
        email,
        password,
        phone,
        organisationName,
        address,
        hospitalName,
        website,
      })
    );

    // Save registration information in localStorage
    const userData = { name, role, email, phone, organisationName, hospitalName, website };
    localStorage.setItem("user", JSON.stringify(userData)); // Store the user data in localStorage

   

  } catch (error) {
    console.log(error);
  }
};
