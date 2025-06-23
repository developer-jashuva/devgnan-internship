import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "../components/LoginPage";
import DashBoard from "../components/DashBoard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />

          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
