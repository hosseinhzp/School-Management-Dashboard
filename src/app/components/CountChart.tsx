"use client"
import React from 'react';
import Image from 'next/image';
import { RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Total',
    count: 106,
    fill: 'white',
  },
  {
    name: 'Girls',
    count: 53,
    fill: '#AEDFF7',
  },
  {
    name: 'Boys',
    count: 53,
    fill: '#fecb89ff',
  },
];

const CountChart = () => {
  return (
    <div className='bg-white p-4 h-full w-full'>
      {/* TITLE */}
      <div className='flex items-center justify-between'>
        <h1 className='text-lg font-semibold'>Students</h1>
        <Image src="/moreDark.png" alt='' height={20} width={20}/>
      </div>
      {/* CHART */}
      <div className='w-full h-[75%]'>
        <ResponsiveContainer>
        <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
          <RadialBar
            background
            dataKey="count"
          />
        </RadialBarChart>
      </ResponsiveContainer>
      </div>
      {/* BOTTOM */}
      <div className='flex justify-center gap-16'>
        <div className='flex flex-col gap-1'>
          <div className='w-5 h-5 bg-[#fecb89ff] rounded-full' />
          <h1 className='font-bold'>1,234</h1>
          <h2>Boys (55%)</h2>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='w-5 h-5 bg-[#AEDFF7] rounded-full' />
          <h1 className='font-bold'>1,234</h1>
          <h2>Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;