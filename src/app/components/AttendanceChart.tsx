"use client"
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React from 'react';
import Image from 'next/image';

const data = [
  {
    name: 'Mon',
    present: 80,
    absent: 67,
  },
  {
    name: 'Tue',
    present: 85,
    absent: 55,
  },
  {
    name: 'Wed',
    present: 70,
    absent: 54,
  },
  {
    name: 'Thu',
    present: 68,
    absent: 61,
  },
  {
    name: 'Fri',
    present: 58,
  },
];

const AttendanceChart = () => {
  return (
       <div className='bg-white rounded-lg h-full p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Attendance</h1>
        <Image src="/moreDark.png" alt="" height={20} width={20}/>
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false}/>
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
          <YAxis axisLine={false}  stroke='#ddd' tick={{fill:"#d1d5db"}} tickLine={false}/>
          <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightgray"}}/>
          <Legend align='left' verticalAlign='top' wrapperStyle={{ paddingTop:"20px", paddingBottom: "40px"}} />
          <Bar dataKey="present" fill="#fecb89ff" legendType='circle' radius={[10,10,0,0]}/>
          <Bar dataKey="absent" fill="#AEDFF7" legendType='circle' radius={[10,10,0,0]}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;