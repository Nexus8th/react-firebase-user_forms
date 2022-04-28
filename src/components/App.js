import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Signup from "./Signup";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword.js";
import UpdateProfile from "./UpdateProfile.js";
import Home from "./Home";
import './App.css'


function App() {
  return (
            <Router>
              <AuthProvider>
                <Routes>
                    <Route path="/home" element={<Home/>} />
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route exact path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/update-profile" element={<PrivateRoute><UpdateProfile/></PrivateRoute>} />
                </Routes>
              </AuthProvider>
            </Router>
  );
}

export default App;