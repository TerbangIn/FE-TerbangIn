import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import OTPRegister from "./pages/otpRegister";
import OTPResetPassword from "./pages/otpResetPassword";
import ResetPasswordBaru from "./pages/resetPasswordBaru";
import ResetPassword from "./pages/resetPassword";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";

function App() {
  return (
    <div className="App">
      {/* <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"> */}
      {/* <div className="max-w-xl w-full space-y-8"> */}
      <div className="w-full h-screen">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/otp-register" element={<OTPRegister />} />
            <Route path="/otp-reset-password" element={<OTPResetPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route
              path="/reset-password-baru"
              element={<ResetPasswordBaru />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
