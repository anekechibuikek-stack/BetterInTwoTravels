import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className={`h-full w-64 bg-white-800 text-white flex flex-col p-4 `}>
      <h2 className="text-2xl text-black font-bold mb-6">Menu</h2>
      <nav className="flex flex-col gap-4">
        <NavLink
          to="/"
          className={({ isActive }: { isActive: boolean }) =>
            `p-2 text-black rounded hover:bg-blue-500 ${isActive ? 'bg-blue-700' : ''}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }: { isActive: boolean }) =>
            `p-2 text-black rounded hover:bg-blue-500 ${isActive ? 'bg-blue-700' : ''}`
          }
        >
          Profile
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }: { isActive: boolean }) =>
            `p-2 rounded text-black hover:bg-blue-500 ${isActive ? 'bg-blue-700' : ''}`
          }
        >
          Settings
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
