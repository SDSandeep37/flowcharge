import ApiTable from "../../../components/ApiTable/ApiTable";
import "./consumerApis.css";
const ConsumerApis = () => {
  return (
    <div className="consumerApisContainer">
      <div className="dashBoardTableContainer">
        <ApiTable userType="consumer" />
      </div>
    </div>
  );
};

export default ConsumerApis;
