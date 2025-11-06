"use client"
import Image from 'next/image';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
  }
]

function EventCalendar() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className='bg-white p-4 gap-4 flex flex-col'>
      <Calendar onChange={onChange} value={value} />
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-semibold my-4'>Events</h1>
        <Image src="/moreDark.png" alt='' height={20} width={20}/>
      </div>
      <div className='flex flex-col gap-4'>
        {events.map((e) => (
          <div 
          className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-blue-200 even:border-t-purple-200'
          key={e.id}>
            <div className='flex items-center justify-between'>
              <h1 className='font-semibold text-gray-600'>{e.title}</h1>
              <span className='text-gray-300 text-xs'>{e.time}</span>
            </div>
            <p className='text-sm mt-2 text-gray-400'>{e.description}</p>
          </div>
        ))}
      </div>
    </div>
    
  );
}

export default EventCalendar;