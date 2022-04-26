import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword.js";
import UpdateProfile from "./UpdateProfile.js";
import Home from "./Home";


function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
          <Router>
            <AuthProvider>
            <div className="w-100" style={{ maxWidth: "400px" }}>
              <Routes>
                  <Route exact path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route path="/update-profile" element={<PrivateRoute><UpdateProfile/></PrivateRoute>} />
              </Routes>
            </div>
            </AuthProvider>
          </Router>
    </Container>,
    <Container>
      <Router>
        <AuthProvider>
            <div>
              <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/" element={<Navigate to="/home" />} />
              </Routes>
            </div>
        </AuthProvider>
      </Router>
    </Container>
  );
}

export default App;