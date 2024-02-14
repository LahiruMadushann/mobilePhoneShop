import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginRegisterPage from "./pages/LoginRegisterPage";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginRegister" element={<LoginRegisterPage />} />
        <Route path={"/adminPage"} element={<AdminPage />}  />
      </Routes>
    </Router>
  );
}

export default App;
