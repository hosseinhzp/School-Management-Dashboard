import React from 'react';

const Pagination = () => {
  return (
    <div className='flex justify-between items-center p-4'>
      <button disabled className='px-4 py-2 bg-slate-200 rounded-md text-xs text-gray-700 font-semibold disabled:cursor-not-allowed disabled:opacity-50'>Prev</button>
      <div className='flex items-center gap-4'>
        <button className='text-gray-500 bg-blue-200 rounded-sm px-2'>1</button>
        <button className='text-gray-500 rounded-sm'>2</button>
        <button className='text-gray-500 rounded-sm'>3</button>
        ...
        <button className='text-gray-500 rounded-sm'>10</button>
      </div>
      <button className='px-4 py-2 bg-slate-200 rounded-md text-xs text-gray-700 font-semibold disabled:cursor-not-allowed disabled:opacity-50'>Next</button>
    </div>
  );
};

export default Pagination;