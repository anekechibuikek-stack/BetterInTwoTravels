import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-white">
      <div className="flex min-h-0 flex-1 flex-col">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="flex min-h-0 flex-1 overflow-hidden">
          {sidebarOpen && <Sidebar />}
          <main
            className="min-h-0 min-w-0 flex-1 overflow-y-auto overflow-x-hidden bg-gray-100 p-3 sm:p-6"
            onClick={() => setSidebarOpen(false)}
          >
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
