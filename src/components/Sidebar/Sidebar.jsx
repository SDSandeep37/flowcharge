import { useContext, useState } from "react";
import { UserAuthContext } from "../../Contexts/AuthContext";
import "./sidebar.css";
import {
  adminMenu,
  consumerMenu,
  ownerMenu,
} from "../../Configs/dashboardMenuConfig";
import logout from "../../utils/logout";
import { Link } from "react-router-dom";

const Sidebar = ({ toggle }) => {
  const { user } = useContext(UserAuthContext);
  const userName = user?.name || user?.role;
  const isAdmin = user?.role === "admin";
  const isConsumer = user?.role === "consumer";
  const isOwner = user?.role === "owner";

  const [selected, setSelected] = useState(null);

  const handleClick = (itemKey) => {
    setSelected(itemKey);
  };

  let menuItems = [];
  if (isAdmin) menuItems = adminMenu;
  if (isConsumer) menuItems = consumerMenu;
  if (isOwner) menuItems = ownerMenu;

  return (
    <>
      {toggle && (
        <aside className="sidebar">
          <div className="userNameContainer">
            <h2 className="userName">{userName}</h2>
          </div>
          <ul className="sidebarMenuListContainer">
            {menuItems.map((item) => (
              <li
                key={item.key}
                onClick={() => handleClick(item.key)}
                className={
                  selected === item.key ? "active" : item.className || ""
                }
                onClickCapture={() => {
                  if (item.function === "logout") {
                    logout();
                  }
                }}
              >
                <Link to={item.path} style={{ color: "white" }}>
                  <span style={{ marginRight: "8px" }}>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </>
  );
};

export default Sidebar;
