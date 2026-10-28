'use client'

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {

const {register, handleSubmit, formState:{errors}} = useForm()
const [isShowPasswod, setIsShowPassword] = useState(false)
  const handleLoginFunc = async(data) => {
   
    

   const { data: res, error } = await authClient.signIn.email({
    email: data.email, // required, The email address of the user.
    password: data.password, // required, The password of the user. It should be at least 8 characters long and max 128 by default.
    rememberMe: true, // If false, the user will be signed out when the browser is closed. (optional) (default: true)
    callbackURL: "/", // An optional URL to redirect to after the user signs in. (optional)
});
console.log(res, error)
  };

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-200 mt-4 rounded-5xl">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-2xl text-center mb-3">
          Login your account
        </h2>
        <form onSubmit={handleSubmit(handleLoginFunc)}>
<fieldset className="fieldset rounded-box w-xs  p-4">
 
  <label className="label">Email</label>
  <input {...register('email',{required: 'Email field is required'})} type="email" className="input" placeholder="Email" />
  { errors.email && <p className="text-red-700 text-sm">{errors.email.message}</p>}

</fieldset>
<fieldset className="fieldset relative  rounded-box w-xs  p-4">
  <label className="label">Password</label>
  <input {...register('password', {required: 'password field is required'})} type={ isShowPasswod? 'text': "password"} className="input" placeholder="Password" />
  
   <span className="absolute right-7 top-14" onClick={()=>setIsShowPassword(!isShowPasswod)}>{isShowPasswod? <FaEyeSlash/>:<FaEye/>  }</span>
 { errors.password && <p className="text-red-700 text-sm">{errors.password.message}</p>}

  <button className="btn btn-neutral mt-4">Login</button>
</fieldset>

        </form>
        <p className="mt-1 text-center">
          {" "}
          Dont have an account?{" "}
          <Link href={"/resister"} className=" text-sm font-bold">
            Resister Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
