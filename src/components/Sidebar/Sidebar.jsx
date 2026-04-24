// import { useContext } from "react";
// import { UserAuthContext } from "../../Contexts/AuthContext";
// import "./sidebar.css";
// import { RxDashboard } from "react-icons/rx";
// import { FaUsers } from "react-icons/fa";
// import { HiOutlineUsers } from "react-icons/hi";
// import { CiSettings, CiLogout } from "react-icons/ci";
// import { ImProfile } from "react-icons/im";
// const Sidebar = ({ toggle }) => {
//   const { user, loading } = useContext(UserAuthContext);
//   const userName = user?.name || user?.role;
//   const isAdmin = user?.role === "admin";
//   const isConsumer = user?.role === "consumer";
//   const isOwner = user?.role === "owner";

//   const handleClick = (e) => {
//     const selectedItem = e.target.textContent;
//     console.log(`Clicked on ${selectedItem}`);
//   };
//   let menuItems = [];
//   if (isAdmin) {
//     menuItems = [
//       <li key="dashboard" onClick={handleClick}>
//         <RxDashboard style={{ marginRight: "8px" }} />
//         <span>Dashboard</span>
//       </li>,
//       <li key="users" onClick={handleClick}>
//         <FaUsers style={{ marginRight: "8px" }} />
//         <span>Users</span>
//       </li>,
//       <li key="owners" onClick={handleClick}>
//         <HiOutlineUsers style={{ marginRight: "8px" }} />
//         <span>Owners</span>
//       </li>,
//       <li key="settings" onClick={handleClick}>
//         <CiSettings style={{ marginRight: "8px" }} />
//         <span>Settings</span>
//       </li>,
//       <li key="logout" className="logout" onClick={handleClick}>
//         <CiLogout
//           style={{ marginRight: "8px", color: "red", fontWeight: "bold" }}
//         />
//         <span>Logout</span>
//       </li>,
//     ];
//   }
//   if (isConsumer) {
//     menuItems = [
//       <li key="dashboard" onClick={handleClick}>
//         <RxDashboard style={{ marginRight: "8px" }} />
//         <span>Dashboard</span>
//       </li>,
//       <li key="profile" onClick={handleClick}>
//         <ImProfile style={{ marginRight: "8px" }} />
//         <span>Profile</span>
//       </li>,
//       <li key="settings" onClick={handleClick}>
//         <CiSettings style={{ marginRight: "8px" }} />
//         <span>Settings</span>
//       </li>,
//       <li key="logout" className="logout" onClick={handleClick}>
//         <CiLogout
//           style={{ marginRight: "8px", color: "red", fontWeight: "bold" }}
//         />
//         <span>Logout</span>
//       </li>,
//     ];
//   }
//   if (isOwner) {
//     menuItems = [
//       <li key="dashboard" onClick={handleClick}>
//         <RxDashboard style={{ marginRight: "8px" }} />
//         <span>Dashboard</span>
//       </li>,
//       <li key="users" onClick={handleClick}>
//         <FaUsers style={{ marginRight: "8px" }} />
//         <span>Users</span>
//       </li>,
//       <li key="settings" onClick={handleClick}>
//         <CiSettings style={{ marginRight: "8px" }} />
//         <span>Settings</span>
//       </li>,
//       <li key="logout" className="logout" onClick={handleClick}>
//         <CiLogout
//           style={{ marginRight: "8px", color: "red", fontWeight: "bold" }}
//         />
//         <span>Logout</span>
//       </li>,
//     ];
//   }

//   return (
//     <>
//       {/* Sidebar container */}
//       {toggle && (
//         <aside className="sidebar">
//           <div className="userNameContainer">
//             <h2 className="userName">{userName}</h2>
//           </div>
//           <ul className="sidebarMenuListContainer">{menuItems}</ul>
//         </aside>
//       )}
//     </>
//   );
// };

// export default Sidebar;

import { useContext, useState } from "react";
import { UserAuthContext } from "../../Contexts/AuthContext";
import "./sidebar.css";
import { RxDashboard } from "react-icons/rx";
import { FaUsers } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import { CiSettings, CiLogout } from "react-icons/ci";
import { ImProfile } from "react-icons/im";

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
  if (isAdmin) {
    menuItems = [
      { key: "dashboard", label: "Dashboard", icon: <RxDashboard /> },
      { key: "users", label: "Users", icon: <FaUsers /> },
      { key: "owners", label: "Owners", icon: <HiOutlineUsers /> },
      { key: "settings", label: "Settings", icon: <CiSettings /> },
      {
        key: "logout",
        label: "Logout",
        className: "logout",
        icon: <CiLogout style={{ color: "red" }} />,
      },
    ];
  }
  if (isConsumer) {
    menuItems = [
      { key: "dashboard", label: "Dashboard", icon: <RxDashboard /> },
      { key: "profile", label: "Profile", icon: <ImProfile /> },
      { key: "settings", label: "Settings", icon: <CiSettings /> },
      {
        key: "logout",
        label: "Logout",
        className: "logout",
        icon: <CiLogout style={{ color: "red" }} />,
      },
    ];
  }
  if (isOwner) {
    menuItems = [
      { key: "dashboard", label: "Dashboard", icon: <RxDashboard /> },
      { key: "users", label: "Users", icon: <FaUsers /> },
      { key: "settings", label: "Settings", icon: <CiSettings /> },
      {
        key: "logout",
        label: "Logout",
        className: "logout",
        icon: <CiLogout style={{ color: "red" }} />,
      },
    ];
  }

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
              >
                <span style={{ marginRight: "8px" }}>{item.icon}</span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </>
  );
};

export default Sidebar;
