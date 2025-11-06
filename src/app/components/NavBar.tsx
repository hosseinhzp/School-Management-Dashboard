import React from 'react';
import SearchBar from './SearchBar';
import Image from 'next/image';

const NavBar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
      {/* LEFT */}
      <div>
        <SearchBar />
      </div>
      {/* RIGHT */}
      <div className='flex items-center justify-between gap-6'>
        <div className='bg-white h-7 w-7 rounded-full flex items-center justify-center'>
          <Image src="/message.png" alt='' height={20} width={20}/>
        </div>
        <div className='bg-white h-7 w-7 rounded-full flex items-center justify-center relative'>
          <Image src="/announcement.png" alt='' width={20} height={20}/>
          <div className='absolute -right-3 -top-3 h-5 w-5 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs'>1</div>
        </div>
        <div className='flex flex-col'>
          <span className='text-xs font-medium leading-3'>Anita Ocean</span>
          <span className='text-gray-500 text-[10px] text-right'>Admin</span>
        </div>
          <Image src="/avatar.png" alt='' width={36} height={36} className='rounded-full'/>
      </div>
    </div>
  );
};

export default NavBar;