import { getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowBarRight } from 'react-icons/bs';
import { CiBookmarkCheck, CiShare2 } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';


const NewsDetailsPage =async({params}) => {
    const {id} = await params
    
    const news = await getNewsDetailsById(id)
    console.log(news ,'news by id')

    return (
        <div className=' max-w-4xl mx-auto my-8 card h-[70vh] '>
            
            <div className="card bg-base-100  shadow-sm">
              <div className="card-body">
                    {/* author info  */}
                    <div className='flex justify-between items-cente bg-slate-200 p-2 rounded-lg'>
                        <div className='flex gap-1 items-center'> 
                            <Image src={news.author?.img} alt={news.author?.name} height={40} width={40} className='rounded-full'></Image>
                            <div>
                                <h2  className='font-semibold'>{news.author?.name}</h2>
                            <p className='text-xs'>{news.author?.published_date}</p>
                            </div>
            
                        </div>
                        <div className='flex gap-2 justify-center items-center'>
                            <CiShare2 className='text-xl'/>
                            <CiBookmarkCheck className='text-xl'/>
                        </div>
                    </div>
            
                <h2 className="card-title">{news.title}</h2>
                
            
                <figure>
               <Image
                src={news.image_url}
                alt={news.title}
                width={300}
                height={300}
                className='w-full'
            
               />
              </figure>
              <p className=''>{news.details}</p>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center  gap-4'>
                           <h2 className='flex items-center  gap-2'> <IoIosStar className='text-lg text-yellow-500'/> {news.rating.number}</h2>
                          <h2 className='flex items-center  gap-2'> <FaEye className='text-lg'/> {news.total_view} </h2>
                        </div>
                        <div className='flex'>
            <Link href={`/category/${news.category_id}`} className='btn bg-pink-500 text-white p-3'>
            <button>See Other News for this Category
             <BsArrowBarRight className='text-xl '/>
              </button></Link>
                        </div>
                    </div>
            
              </div>
              
            </div>
        </div>
    );
};

export default NewsDetailsPage;