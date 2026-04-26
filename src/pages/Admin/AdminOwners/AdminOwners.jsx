import "./adminOwners.css";
import RegistrationForm from "../../../components/RegistrationForm/RegistrationForm";
import OwnerTable from "../../../components/OwnerTable/OwnerTable";
const AdminOwners = () => {
  return (
    <div className="adminOwnersContainer">
      <div className="adminOwnersRegistration">
        <h2>Register New Owner</h2>
        <RegistrationForm userRole="owner" />
      </div>
      <div className="dashBoardTableContainer">
        <OwnerTable />
      </div>
    </div>
  );
};

export default AdminOwners;
