import "./adminUsers.css";
import RegistrationForm from "../../../components/RegistrationForm/RegistrationForm";
import ConsumerTable from "../../../components/ConsumerTable/ConsumerTable";
const AdminUsers = () => {
  return (
    <div className="adminUsersContainer">
      <div className="adminUsersRegistration">
        <h2>Register New User</h2>
        <RegistrationForm userRole="consumer" />
      </div>
      <div className="dashBoardTableContainer">
        <ConsumerTable />
      </div>
    </div>
  );
};

export default AdminUsers;
