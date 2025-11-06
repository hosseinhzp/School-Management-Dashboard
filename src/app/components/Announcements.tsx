import React from 'react';

const Announcements = () => {
  return (
    <div className='bg-white p-4 rounded-md gap-4 flex flex-col'>
      <div className='flex items-center justify-between'>
        <h1 className='font-semibold text-lg'>Announcements</h1>
        <span className='text-xs text-gray-400'>View All</span>
      </div>
      <div className='bg-blue-100 p-4 rounded-md'>
        <div className='flex items-center justify-between'>
          <h1 className='font-semibold'>Lorem ipsum dolor sit</h1>
          <span className='bg-white text-gray-400 px-1 py-1 rounded-md text-xs'>2025-01-01</span>
        </div>
        <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, sunt ab excepturi non ad at quis accusantium.</p>
      </div>
      <div className='bg-purple-100 p-4 rounded-md'>
        <div className='flex items-center justify-between'>
          <h1 className='font-semibold'>Lorem ipsum dolor sit</h1>
          <span className='bg-white text-gray-400 px-1 py-1 rounded-md text-xs'>2025-01-01</span>
        </div>
        <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, sunt ab excepturi non ad at quis accusantium.</p>
      </div>
      <div className='bg-amber-100 p-4 rounded-md'>
        <div className='flex items-center justify-between'>
          <h1 className='font-semibold'>Lorem ipsum dolor sit</h1>
          <span className='bg-white text-gray-400 px-1 py-1 rounded-md text-xs'>2025-01-01</span>
        </div>
        <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, sunt ab excepturi non ad at quis accusantium.</p>
      </div>
    </div>
  )
}

export default Announcements;