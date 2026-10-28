'use client'


import { authClient } from "@/lib/auth-client";
import React from "react";
import { useForm } from "react-hook-form";

const ResisterPage = () => {

const {register, handleSubmit, formState:{errors}} = useForm()

  const handleResisterFunc = async (data) => {
    console.log(data , 'hook form data')
    const {email, name , photo, password} = data

    const {data: res, error} = await authClient.signUp.email({
        name: name, // required, The name of the user.
    email: email, // required, The email address of the user.
    password: password, // required, The password of the user. It should be at least 8 characters long and max 128 by default.
    image: photo, // An optional profile image of the user.
    callbackURL: "/", // An optional URL to redirect to after the user signs up.
    })
   console.log( res, error)
   if(error){
    alert(error.message)
   }
   if (res){
    alert('Signup successful')
   }
  };

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-200 mt-4 rounded-5xl">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-2xl text-center mb-3">
          Register your account
        </h2>
        <form onSubmit={handleSubmit(handleResisterFunc)}>
 <fieldset className="fieldset   rounded-box w-xs  p-4">
 

  <label className="label">Name</label>
  <input {...register('name',{required: 'Name field is required'})} type="text" className="input" placeholder="Name" />
  { errors.name && <p className="text-red-700 text-sm">{errors.name.message}</p>}
 
  <label className="label">Photo</label>
  <input {...register('photo',{required: 'Photo field is required'})} type="text" className="input" placeholder="Photo URL" />
  { errors.photo && <p className="text-red-700 text-sm">{errors.photo.message}</p>}

  <label className="label">Email</label>
  <input {...register('email',{required: 'Email field is required'})} type="email" className="input" placeholder="Email" />
  { errors.email && <p className="text-red-700 text-sm">{errors.email.message}</p>}

  <label className="label">Password</label>
  <input {...register('password', {required: 'password field is required'})}  type="password" className="input" placeholder="Password" />
 { errors.password && <p className="text-red-700 text-sm">{errors.password.message}</p>}

  <button className="btn btn-neutral mt-4">Register</button>
</fieldset>




        </form>
       
      </div>
    </div>
  );
};

export default ResisterPage;
