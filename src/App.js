import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import OTP from "./pages/otp";
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
            <Route path="/api/v1/user/login" element={<Login />} />
            <Route path="/api/v1/user/register" element={<Signup />} />
            <Route path="/api/v1/user/otp" element={<OTP />} />
          </Routes>
        </BrowserRouter>
      </div>
      {/* </div>
      </div> */}
      {/* <Login/> */}
      {/* <Register/> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
