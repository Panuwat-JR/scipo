import React from 'react';
import { MoreHorizontal, ExternalLink } from 'lucide-react';

const TicketTable = ({ tickets }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'bg-amber-50 text-amber-600 border-amber-100';
      case 'resolved':
        return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'rejected':
        return 'bg-rose-50 text-rose-600 border-rose-100';
      default:
        return 'bg-gray-50 text-gray-600 border-gray-100';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'critical':
        return 'text-rose-600';
      case 'high':
        return 'text-orange-500';
      case 'medium':
        return 'text-amber-500';
      case 'low':
        return 'text-emerald-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
      <div className="px-6 py-5 border-b border-gray-50 flex items-center justify-between">
        <h3 className="font-bold text-gray-800 text-lg">รายการแจ้งปัญหาล่าสุด</h3>
        <button className="text-brand-green-600 text-sm font-semibold hover:underline flex items-center gap-1">
          ดูทั้งหมด <ExternalLink size={14} />
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-50/50 text-gray-400 text-xs uppercase tracking-wider">
              <th className="px-6 py-4 font-semibold">เลขทิกเก็ต</th>
              <th className="px-6 py-4 font-semibold">ผู้ใช้งาน</th>
              <th className="px-6 py-4 font-semibold">หัวข้อ</th>
              <th className="px-6 py-4 font-semibold">ลำดับความสำคัญ</th>
              <th className="px-6 py-4 font-semibold">สถานะ</th>
              <th className="px-6 py-4 font-semibold">วันที่</th>
              <th className="px-6 py-4 font-semibold"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {tickets.map((ticket) => (
              <tr key={ticket.id} className="hover:bg-gray-50/50 transition-colors group">
                <td className="px-6 py-4">
                  <span className="font-mono text-xs font-bold text-gray-400 group-hover:text-brand-green-600 transition-colors">{ticket.id}</span>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-gray-800">{ticket.user}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{ticket.subject}</td>
                <td className="px-6 py-4 text-sm font-bold">
                  <span className={getPriorityColor(ticket.priority)}>
                    {ticket.priority}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${getStatusColor(ticket.status)}`}>
                    {ticket.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-400">{ticket.date}</td>
                <td className="px-6 py-4 text-right">
                  <button className="p-1 hover:bg-white rounded-lg text-gray-400 hover:text-gray-600 border border-transparent hover:border-gray-100 shadow-none hover:shadow-sm">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TicketTable;
