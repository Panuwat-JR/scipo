import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <main className="flex-1 ml-64 min-h-screen flex flex-col">
        <Header />
        <div className="p-8 pb-20">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
