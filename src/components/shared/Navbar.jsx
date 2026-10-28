"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from '@/assets/user.png'
import Navlink from './Navlink';
import { authClient } from "@/lib/auth-client"


const Navbar = () => {
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;
    console.log('user', user)

    return (
        <div className='   flex justify-between mt-6'>
            <div></div>
        <ul className='flex justify-between items-center gap-3 text-gray-500'>
            <li><Navlink href={'/'}>Home</Navlink></li>
            <li><Navlink href={'/about'}>About</Navlink></li>
            <li><Navlink href={'/career'}>Career</Navlink></li>
        </ul>
      {isPending ? <span className="loading loading-dots loading-md"></span> :user ?( 
        <div className='flex items-center gap-2 '>
            <h2 className='text-lg font-semibold btn bg-pink-500 text-white'>{user.name}</h2>
       <button className='btn bg-black text-white' onClick={async()=> await authClient.signOut()}>Logout</button>
       </div>
        )
        
        :(

             
            <button className='btn bg-black text-white'><Link href={'/login'}>Login</Link></button>
        
            
        ) 
        }
        </div>
    );
};

export default Navbar;