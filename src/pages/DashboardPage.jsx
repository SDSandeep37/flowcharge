import { useContext } from "react";
import { UserAuthContext } from "../Contexts/AuthContext";
import OwnerDashboardPage from "./OwnerDashboardPage";
import ConsumerDashboardPage from "./ConsumerDashboardPage";
import AdminDashboardPage from "./AdminDashboardPage";
import { SidebarProvider } from "../Contexts/SidebarContext";
const DashboardPage = () => {
  const { user, loading } = useContext(UserAuthContext);
  const role = user?.role;
  if (!loading && !user) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <p style={{ color: "red", letterSpacing: "1.3px" }}>
          Session expired or Unauthorized access
          {setTimeout(() => {
            window.location.href = "/login";
          }, 2000)}
        </p>
      </div>
    );
  }
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <p style={{ color: "green", letterSpacing: "1.3px" }}>
          Please wait while loading...
        </p>
      </div>
    );
  }
  return (
    <SidebarProvider>
      {role === "owner" && <OwnerDashboardPage />}
      {role === "consumer" && <ConsumerDashboardPage />}
      {role === "admin" && <AdminDashboardPage />}
    </SidebarProvider>
  );
};

export default DashboardPage;
