import Image from 'next/image';
import React from 'react';

const TableSearch = () => {
  return (
      <div className='w-full md:w-auto flex items-center gap-2 rounded-full text-xs ring-[1.5px] ring-gray-300 px-2'>
        <Image src="/search.png" alt='' height={14} width={14}/>
        <input 
        type='text'
        placeholder='Search...'
        className='w-[200px] p-2 outline-none bg-transparent'/>
      </div>
  );
};

export default TableSearch;