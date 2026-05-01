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
import DashboardLayout from "./components/DashboardLayout/DashboardLayout";
import { SidebarProvider } from "./Contexts/SidebarContext";
import AdminUsers from "./pages/Admin/AdminUsers/AdminUsers";
import AdminOwners from "./pages/Admin/AdminOwners/AdminOwners";
import AdminApis from "./pages/Admin/AdminApis/AdminApis";
import OwnerApis from "./pages/Owner/OwnerApis/OwnerApis";
import ConsumerApis from "./pages/Consumer/ConsumerApis/ConsumerApis";
import ConsumerApiDetail from "./pages/Consumer/ConsumerApiDetail/ConsumerApiDetail";
const App = () => {
  return (
    <UserAuthProvider>
      <SidebarProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<UserRegisterPage />} />

            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/admin/users" element={<AdminUsers />} />
              <Route path="/admin/owners" element={<AdminOwners />} />
              <Route path="/admin/apis" element={<AdminApis />} />
              <Route path="/owner/apis" element={<OwnerApis />} />
              <Route path="/consumer/apis" element={<ConsumerApis />} />
              <Route
                path="/consumer/api/detail/:id"
                element={<ConsumerApiDetail />}
              />
            </Route>
            {/* Default Redirect */}
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </Router>
      </SidebarProvider>
    </UserAuthProvider>
  );
};

export default App;
