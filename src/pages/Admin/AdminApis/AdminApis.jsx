import "./adminApis.css";
import ApiRegistrationForm from "../../../components/ApiRegistrationForm/ApiRegistrationForm";
import ApiTable from "../../../components/ApiTable/ApiTable";

const AdminApis = () => {
  return (
    <div className="adminApisContainer">
      <div className="adminApisRegistration">
        <h2>Register New API</h2>
        <ApiRegistrationForm />
      </div>
      <div className="dashBoardTableContainer">
        <ApiTable />
      </div>
    </div>
  );
};

export default AdminApis;
