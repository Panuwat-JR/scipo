import React, { useState, useEffect } from 'react';
import SummaryCard from '../components/SummaryCard';
import TicketTable from '../components/TicketTable';
import AnalyticsChart from '../components/AnalyticsChart';
import { Users, AlertCircle, ShieldCheck, DollarSign } from 'lucide-react';

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsRes, ticketsRes] = await Promise.all([
          fetch('http://localhost:5000/api/stats'),
          fetch('http://localhost:5000/api/tickets')
        ]);
        const statsData = await statsRes.json();
        const ticketsData = await ticketsRes.json();
        setStats(statsData);
        setTickets(ticketsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return null; // Parent handles loading if needed, but here we just wait

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">ภาพรวมระบบ</h1>
          <p className="text-gray-500 mt-1">ยินดีต้อนรับกลับมา, พรุ่งนี้เป็นวันที่ดีสำหรับการจัดการข้อมูล</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCard 
          title="ผู้ใช้ทั้งหมด" 
          value={stats?.totalUsers?.toLocaleString()} 
          icon={<Users size={22} />} 
          trend="up" 
          trendValue="+12%"
          color="blue"
        />
        <SummaryCard 
          title="ปัญหาที่กำลังแก้ไข" 
          value={stats?.pendingIssues} 
          icon={<AlertCircle size={22} />} 
          trend="down" 
          trendValue="-5%"
          color="orange"
        />
        <SummaryCard 
          title="สถานะระบบ" 
          value={stats?.systemStatus} 
          icon={<ShieldCheck size={22} />} 
          trend="up" 
          trendValue="100%"
          color="green"
        />
        <SummaryCard 
          title="รายได้" 
          value={`$${stats?.monthlyRevenue?.toLocaleString()}`} 
          icon={<DollarSign size={22} />} 
          trend="up" 
          trendValue="+8.2%"
          color="purple"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <TicketTable tickets={tickets} />
        </div>
        <div className="lg:col-span-1">
          <AnalyticsChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
