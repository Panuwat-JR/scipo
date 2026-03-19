import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Database, Ticket, BarChart3, Settings, LogOut } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: <Home size={20} />, label: 'หน้าหลัก', path: '/' },
    { icon: <Database size={20} />, label: 'จัดการข้อมูล', path: '/data' },
    { icon: <Ticket size={20} />, label: 'ทิกเก็ตแจ้งปัญหา', path: '/tickets' },
    { icon: <BarChart3 size={20} />, label: 'สถิติวิเคราะห์', path: '/analytics' },
    { icon: <Settings size={20} />, label: 'ตั้งค่า', path: '/settings' },
  ];

  return (
    <div className="w-64 bg-white h-screen border-r border-gray-100 flex flex-col fixed left-0 top-0">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-green-600 rounded-xl flex items-center justify-center">
            <Database className="text-white" size={24} />
          </div>
          <span className="text-xl font-bold text-gray-800 tracking-tight">EcoSupport</span>
        </div>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) => `
              w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group
              ${isActive 
                ? 'bg-brand-green-50 text-brand-green-700 font-bold' 
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}
            `}
          >
            {({ isActive }) => (
              <>
                <span className={isActive ? 'text-brand-green-600' : 'text-gray-400 group-hover:text-gray-600'}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-50">
        <button className="w-full flex items-center gap-4 px-4 py-3 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200">
          <LogOut size={20} />
          <span>ออกจากระบบ</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
