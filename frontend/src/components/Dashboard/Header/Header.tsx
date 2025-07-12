import React from 'react';
import UserMenu from './UserMenu';

type HeaderProps = {
  setIsLoggedIn: (value: boolean) => void;
};

function Header({ setIsLoggedIn }: HeaderProps) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <header className="flex justify-between items-center p-6 bg-white/10 border-b border-cyan-400 rounded-t-xl font-orbitron shadow-lg backdrop-blur-xl">
      <div className="flex items-center">
        <span className="flex items-center gap-2 cursor-pointer text-xl font-semibold text-cyan-300" onClick={() => window.location.href = '/dashboard'}>
          <h2>Dashboard</h2>
        </span>
      </div>
      <div className="flex items-center gap-6">
        <UserMenu />
        <button
          onClick={handleLogout}
          className="px-4 py-1 rounded-full bg-pink-400 text-white font-bold shadow hover:bg-pink-500 transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;