import React from 'react';
import { Search, Filter, Download, Plus } from 'lucide-react';

const DataManager = () => {
  const users = [
    { id: 1, name: 'Somchai Jaidee', email: 'somchai@example.com', role: 'Admin', status: 'Active', joined: '2026-01-15' },
    { id: 2, name: 'Wichai Rakthai', email: 'wichai@example.com', role: 'User', status: 'Inactive', joined: '2026-02-10' },
    { id: 3, name: 'Ananya Ploy', email: 'ananya@example.com', role: 'User', status: 'Active', joined: '2026-03-01' },
    { id: 4, name: 'Kittisak Teerak', email: 'kittisak@example.com', role: 'Editor', status: 'Pending', joined: '2026-03-12' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">จัดการข้อมูล</h1>
          <p className="text-gray-500 mt-1">จัดการผู้ใช้งานและฐานข้อมูลระบบทั้งหมด</p>
        </div>
        <button className="bg-brand-green-600 hover:bg-brand-green-700 text-white px-6 py-2.5 rounded-xl font-bold transition-all flex items-center gap-2">
          <Plus size={18} /> เพิ่มข้อมูลใหม่
        </button>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4 w-1/2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input type="text" placeholder="ค้นหาชื่อ, อีเมล..." className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-lg text-sm outline-none focus:ring-2 focus:ring-brand-green-100" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 text-gray-600 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors text-sm">
            <Filter size={16} /> กรองข้อมูล
          </button>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-brand-green-600 border border-brand-green-100 rounded-lg hover:bg-brand-green-50 transition-colors text-sm font-bold">
          <Download size={16} /> ส่งออก CSV
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-50/50 text-gray-400 text-xs uppercase tracking-wider font-bold">
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">ชื่อ-นามสกุล</th>
              <th className="px-6 py-4">บทบาท</th>
              <th className="px-6 py-4">สถานะ</th>
              <th className="px-6 py-4">วันที่เข้าร่วม</th>
              <th className="px-6 py-4">จัดการ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50/30 transition-colors group">
                <td className="px-6 py-4 text-sm font-mono text-gray-400">#{user.id.toString().padStart(4, '0')}</td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-800">{user.name}</span>
                    <span className="text-xs text-gray-400">{user.email}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 font-medium">{user.role}</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                    user.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 
                    user.status === 'Inactive' ? 'bg-gray-50 text-gray-400' : 'bg-amber-50 text-amber-600'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{user.joined}</td>
                <td className="px-6 py-4">
                  <button className="text-brand-green-600 hover:text-brand-green-800 text-sm font-bold">แก้ไข</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataManager;
