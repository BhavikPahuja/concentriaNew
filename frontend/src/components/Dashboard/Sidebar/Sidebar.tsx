import React from "react";
import { useState } from "react";
import SidebarNavItem from "./SidebarNavItem";
import {
  MdDashboard,
  MdOutlinePrivacyTip,
  MdSettings,
  MdHelpOutline,
  MdStorage,
  MdWidgets,
  MdOutlineMenu,
} from "react-icons/md";

function Sidebar() {
  const [rotation, setRotation] = useState(false);
  const [text, setText] = useState(true);
  const handleClick = () => {
    setRotation(!rotation);
    setText(!text);
  };
  return (
    <aside className="bg-gray-900 text-gray-200 p-6 flex flex-col shadow-xl transition-all duration-300">
      <div className="flex items-center gap-3 mb-10 text-white flex mr-6">
        <MdOutlineMenu
          size={28}
          onClick={handleClick}
          className={`transform cursor-pointer transition-transform duration-300 ${
            rotation ? "rotate-90" : ""
          }`}
        />
        <h2 className="text-xl font-semibold">{text ? (<pre className="font-sans">Concentria</pre>) : "" }</h2>
      </div>
      <nav className="flex-grow flex">
        <ul>
          <SidebarNavItem icon={<MdDashboard />} text={ text ? "Dashboard" : "" } active />
          {/* <SidebarNavItem icon={<MdOutlinePrivacyTip />} text={ text ? "Privacy" : "" } />
          <SidebarNavItem icon={<MdStorage />} text={ text ? "Data Logs" : "" } />
          <SidebarNavItem icon={<MdWidgets />} text={ text ? "Integrations" : "" } />
          <SidebarNavItem icon={<MdSettings />} text={ text ? "Settings" : "" } />
          <SidebarNavItem icon={<MdHelpOutline />} text={ text ? "Help" : "" } /> */}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
