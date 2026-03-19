import React from 'react';
import TicketTable from '../components/TicketTable';
import { Search, Tag, MessageSquare } from 'lucide-react';

const TicketsPage = () => {
  // We can fetch this from backend if we want more real data, but using mock for UI decoration
  const tickets = [
    { id: 'T-1001', user: 'Somchai K.', subject: 'Login problem', status: 'Pending', priority: 'High', date: '2026-03-19' },
    { id: 'T-1002', user: 'Wichai S.', subject: 'Payment failed', status: 'Resolved', priority: 'Critical', date: '2026-03-18' },
    { id: 'T-1003', user: 'Ananya P.', subject: 'Update profile', status: 'Resolved', priority: 'Low', date: '2026-03-18' },
    { id: 'T-1004', user: 'Kittisak T.', subject: 'Feature request', status: 'Pending', priority: 'Medium', date: '2026-03-17' },
    { id: 'T-1005', user: 'Nattaya J.', subject: 'Bug report: UI', status: 'Pending', priority: 'High', date: '2026-03-17' },
    { id: 'T-1006', user: 'Prasert M.', subject: 'Access denied', status: 'Rejected', priority: 'Medium', date: '2026-03-16' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">ทิกเก็ตแจ้งปัญหา</h1>
          <p className="text-gray-500 mt-1">ติดตามและแก้ไขปัญหาที่ผู้ใช้งานแจ้งเข้ามา</p>
        </div>
        <div className="flex gap-3">
          <div className="bg-white px-4 py-2 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
            <Tag size={18} className="text-brand-green-600" />
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Pending</p>
              <p className="text-sm font-bold text-gray-800">12 รายการ</p>
            </div>
          </div>
          <div className="bg-white px-4 py-2 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
            <MessageSquare size={18} className="text-blue-500" />
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">In Progress</p>
              <p className="text-sm font-bold text-gray-800">5 รายการ</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex gap-4 mb-6">
          <button className="px-4 py-2 bg-brand-green-600 text-white rounded-lg text-sm font-bold shadow-md shadow-brand-green-100">ทั้งหมด</button>
          <button className="px-4 py-2 text-gray-500 hover:bg-gray-50 rounded-lg text-sm font-bold transition-colors">รอดำเนินการ</button>
          <button className="px-4 py-2 text-gray-500 hover:bg-gray-50 rounded-lg text-sm font-bold transition-colors">แก้ไขแล้ว</button>
          <button className="px-4 py-2 text-gray-500 hover:bg-gray-50 rounded-lg text-sm font-bold transition-colors">ยกเลิก</button>
        </div>
        
        <TicketTable tickets={tickets} />
      </div>
    </div>
  );
};

export default TicketsPage;
