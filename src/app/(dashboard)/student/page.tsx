import React from 'react';
import EventCalendar from '@/app/components/EventCalendar';
import Announcements from '@/app/components/Announcements';
import BigCalendar from '@/app/components/BigCalendar';

const AdminPage = () => {
  return (
    <div className='flex flex-col md:flex-row p-4 gap-4'>
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule (4A)</h1>
          <BigCalendar/>
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