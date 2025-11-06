import AttendanceChart from '@/app/components/AttendanceChart';
import CountChart from '@/app/components/CountChart';
import FinanceChart from '@/app/components/FinanceChart';
import UserCard from '@/app/components/UserCard';
import React from 'react';
import EventCalendar from '@/app/components/EventCalendar';
import Announcements from '@/app/components/Announcements';

const AdminPage = () => {
  return (
    <div className='flex flex-col md:flex-row p-4 gap-4'>
      {/* LEFT */}
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
        {/* USER CARDS */}
        <div className='flex flex-wrap gap-4 justify-between'>
          <UserCard type='student'/>
          <UserCard type='teacher'/>
          <UserCard type='parent'/>
          <UserCard type='staff'/>
        </div>
        {/* MIDDLE CHARTS */}
        <div className='flex flex-col lg:flex-row gap-4'>
          {/* COUNT CHARTS */}
          <div className='w-full lg:w-1/3 h-[450px] rounded-md'>
            <CountChart />
          </div>
          {/* ATTENDANCE CHARTS */}
          <div className='w-full lg:w-2/3 h-[450px] rounded-md'>
            <AttendanceChart />
          </div>
        </div>
        {/* BOTTOM CHARTS */}
        <div className='w-full h-[450px] rounded-md'>
          <FinanceChart />
        </div>
      </div>
      {/* RIGHT */}
      <div className='w-full lg:w-1/3 flex flex-col gap-8'>
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;