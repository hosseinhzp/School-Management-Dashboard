import Image from 'next/image';
import React from 'react';

const UserCard = ({ type }: { type: string}) => {
  return (
    <div className='rounded-2xl flex-1 min-w-[130px] p-4 odd:bg-[#AEDFF7] even:bg-[#fecb89ff]'>
      <div className='flex items-center justify-between'>
        <span className='text-[10px] bg-white rounded-full text-green-600 px-2 py-1'>2025/2026</span>
        <Image src="/more.png" alt='' width={20} height={20}/>
      </div>
      <h1 className='text-2xl font-semibold my-4'>1,234</h1>
      <h2 className='capitalize text-sm font-medium text-gray-500'>{type}s</h2>
    </div>
  );
};

export default UserCard;