import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage"; //Since it is a defalut export it can be renamed as Login or Mylogin etc
import UserRegisterPage from "./pages/UserRegisterPage";
import { UserAuthProvider } from "./Contexts/AuthContext";
import DashboardPage from "./pages/DashboardPage";

const App = () => {
  return (
    <UserAuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<UserRegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />

          {/* Default Redirect */}
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </UserAuthProvider>
  );
};

export default App;
