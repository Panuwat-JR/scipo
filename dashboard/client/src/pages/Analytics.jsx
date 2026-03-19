import React from 'react';
import AnalyticsChart from '../components/AnalyticsChart';
import { BarChart3, LineChart, PieChart, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const Analytics = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">สถิติวิเคราะห์</h1>
          <p className="text-gray-500 mt-1">วิเคราะห์ข้อมูลการใช้งานและประสิทธิภาพระบบ</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-sm font-bold">
           ช่วง 30 วันที่ผ่านมา
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AnalyticsChart />
        </div>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-800">อัตราการแก้ไข</h3>
              <PieChart size={20} className="text-brand-green-600" />
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-brand-green-500 w-[84%]"></div>
              </div>
              <span className="text-lg font-bold text-gray-800">84%</span>
            </div>
            <p className="text-xs text-gray-400 mt-3 flex items-center gap-1 font-medium">
              <ArrowUpRight size={14} className="text-emerald-500" /> +2.4% จากเดือนที่แล้ว
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-800">ความพึงพอใจ</h3>
              <BarChart3 size={20} className="text-blue-500" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-gray-800">4.8</span>
              <span className="text-sm text-gray-400">/ 5.0</span>
            </div>
            <p className="text-xs text-gray-400 mt-3 flex items-center gap-1 font-medium">
              <ArrowDownRight size={14} className="text-rose-500" /> -0.1 จากสัปดาห์ที่แล้ว
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
