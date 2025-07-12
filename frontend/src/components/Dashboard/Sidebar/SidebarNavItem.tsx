import React, { ReactElement } from 'react';

type SidebarNavItemProps = {
  icon: ReactElement;
  text: string;
  active?: boolean;
};

const SidebarNavItem: React.FC<SidebarNavItemProps> = ({ icon, text, active = false }) => {
  const activeClasses = active
    ? 'bg-cyan-600 text-white shadow-md'
    : 'hover:bg-cyan-900 hover:scale-105';

  return (
    <li
      className={`flex items-center gap-4 p-3 mb-2 rounded-lg cursor-pointer transition-all duration-200 ease-in-out font-orbitron ${activeClasses}`}
      tabIndex={0}
      role="button"
    >
      <div className={`${active ? 'text-white' : 'text-cyan-300'} text-2xl`}>{icon}</div>
      <span className="text-lg font-medium">{text}</span>
    </li>
  );
};

export default SidebarNavItem;