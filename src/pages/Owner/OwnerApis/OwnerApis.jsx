import "./ownerApis.css";
import ApiRegistrationForm from "../../../components/ApiRegistrationForm/ApiRegistrationForm";
import ApiTable from "../../../components/ApiTable/ApiTable";

const OwnerApis = () => {
  return (
    <div className="ownerApisContainer">
      <div className="ownerApisRegistration">
        <h2>Register New API</h2>
        <ApiRegistrationForm userType="owner" />
      </div>
      <div className="dashBoardTableContainer">
        <ApiTable userType="owner" />
      </div>
    </div>
  );
};

export default OwnerApis;
