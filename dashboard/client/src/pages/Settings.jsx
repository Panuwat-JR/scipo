import React from 'react';
import { User, Bell, Lock, Globe, Mail } from 'lucide-react';

const Settings = () => {
  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">ตั้งค่า</h1>
        <p className="text-gray-500 mt-1">จัดการโปรไฟล์และการตั้งค่าระบบของคุณ</p>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="flex border-b border-gray-50">
          <button className="px-6 py-4 text-sm font-bold text-brand-green-600 border-b-2 border-brand-green-600">โปรไฟล์</button>
          <button className="px-6 py-4 text-sm font-medium text-gray-400 hover:text-gray-600">การแจ้งเตือน</button>
          <button className="px-6 py-4 text-sm font-medium text-gray-400 hover:text-gray-600">ความปลอดภัย</button>
        </div>

        <div className="p-8 space-y-8">
          <div className="flex items-center gap-8">
            <div className="w-24 h-24 bg-brand-green-100 rounded-full flex items-center justify-center text-brand-green-700 font-bold text-3xl border-4 border-white shadow-md">
              A
            </div>
            <div>
              <button className="bg-brand-green-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-brand-green-700 transition-colors">
                เปลี่ยนรูปโปรไฟล์
              </button>
              <p className="text-xs text-gray-400 mt-2">รองรับ JPG, PNG เท่านั้น ขนาดไม่เกิน 5MB</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                <User size={16} /> ชื่อ-นามสกุล
              </label>
              <input type="text" defaultValue="Admin User" className="w-full px-4 py-2.5 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-brand-green-100 outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                <Mail size={16} /> อีเมล
              </label>
              <input type="email" defaultValue="admin@eco-support.com" className="w-full px-4 py-2.5 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-brand-green-100 outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                <Globe size={16} /> ภาษา
              </label>
              <select className="w-full px-4 py-2.5 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-brand-green-100 outline-none appearance-none">
                <option>ภาษาไทย (Thai)</option>
                <option>English (US)</option>
              </select>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-50 flex justify-end gap-3">
            <button className="px-6 py-2.5 text-gray-500 font-bold hover:bg-gray-50 rounded-xl transition-colors">ยกเลิก</button>
            <button className="px-6 py-2.5 bg-brand-green-600 text-white rounded-xl font-bold shadow-lg shadow-brand-green-100 hover:bg-brand-green-700 transition-all">
              บันทึกการเปลี่ยนแปลง
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
