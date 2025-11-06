"use client"
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import InputField from '../InputField';
import Image from 'next/image';

const schema = z.object({
  username: z
  .string()
  .min(3, { message: 'Username must be at least 3 characters long!' })
  .max(20, { message: 'Username must be at most 20 characters long!' }),
  email: z.email({message:"Invalid email address!"}),
  password: z.string().min(8, {message:"Password must be 8 charecters long!"}),
  firstName: z.string().min(1, {message:"First name is required!"}),
  lastName: z.string().min(1, {message:"Last name is required!"}),
  phone: z.string().min(1, {message:"Phone is required!"}),
  address: z.string().min(1, {message:"Address is required!"}),
  bloodType: z.string().min(1, {message:"Blood Type is required!"}),
  birthday: z.date({message:"Birthday is required!"}),
  sex: z.enum(["male", "female"], {message: "Sex is required"}),
  img: z.instanceof(File, {message: "Image is required"}),
});

type Inputs = z.infer<typeof schema>;

const LessonForm = ({
  type,
  data,
} : {
  type: "create" | "update";
  data?: any;
}) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  })

  return (
    <form className='flex flex-col gap-8' onSubmit={onSubmit}>
      <h1 className='text-xl font-semibold'>Create a new lesson</h1>
      <span className='text-xs text-gray-400 font-medium'>Authentication Information</span>

      <div className='flex flex-wrap justify-between gap-4'>
      <InputField 
      label='username' 
      name='username' 
      defaultValue={data?.username} 
      register={register} 
      error={errors.username}
      />
      <InputField 
      label='Email'
      name='email'
      type='email'
      defaultValue={data?.username} 
      register={register} 
      error={errors.username}
      />
      <InputField 
      label='Password'
      name='password'
      type='password'
      defaultValue={data?.username} 
      register={register} 
      error={errors.username}
      />
      </div>

      <span className='text-xs text-gray-400 font-medium'>Personal Information</span>
      
      <div className='flex flex-wrap justify-between gap-4'>
        <InputField 
      label='First Name' 
      name='firstname' 
      defaultValue={data?.username} 
      register={register} 
      error={errors.username}
      />
      <InputField 
      label='Last Name'
      name='lastname'
      defaultValue={data?.username} 
      register={register} 
      error={errors.username}
      />
      <InputField 
      label='Phone'
      name='phone'
      defaultValue={data?.username} 
      register={register} 
      error={errors.username}
      />
      <InputField 
      label='Address'
      name='address'
      defaultValue={data?.username} 
      register={register} 
      error={errors.username}
      />
      <InputField 
      label='Blood Type'
      name='bloodType'
      defaultValue={data?.username} 
      register={register} 
      error={errors.username}
      />
      <InputField 
      label='Birthday'
      name='birthday'
      defaultValue={data?.username} 
      register={register} 
      error={errors.username}
      type='date'
      />
        <div className='flex flex-col gap-2 w-full md:w-1/4 justify-center'>
        <label className='text-xs text-gray-500'>Sex</label>
        <select className='ring-2 ring-gray-300 p-2 rounded-md text-sm w-full' {...register("sex")} defaultValue={data?.sex}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {errors.sex?.message && <p className='text-xs text-red-400'>{errors.sex.message.toString()}</p>}
      </div>

      <div className='flex flex-col gap-2 w-full md:w-1/4'>
        <label className='text-xs text-gray-500 flex items-center gap-2 cursor-pointer' htmlFor='img'>
          <Image src="/upload.png" alt='' width={28} height={28}/>
          <span>Upload a photo</span>
        </label>
        <input type='file' id="img" {...register("img")} className='hidden'/>
        {errors.img?.message && <p className='text-xs text-red-400'>{errors.img.message.toString()}</p>}
      </div>
    </div>
      <button className='bg-blue-400 text-white p-2 rounded-md'>{type === "create" ? "create" : "update"}</button>
    </form>
  );
};

export default LessonForm;