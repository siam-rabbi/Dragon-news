import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark,  CiShare2, CiStar } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';

const NewsCard = ({news}) => {
    console.log(news)
    return (
        
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
                <CiBookmark className='text-xl'/>
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
  <p className='line-clamp-3'>{news.details}</p>
        <div className='flex items-center justify-between'>
            <div className='flex items-center  gap-4'>
               <h2 className='flex items-center  gap-2'> <IoIosStar className='text-lg text-yellow-500'/> {news.rating.number}</h2>
              <h2 className='flex items-center  gap-2'> <FaEye className='text-lg'/> {news.total_view} </h2>
            </div>
            <Link href={`/news/${news._id}`} className='btn'><button>See Details</button></Link>
        </div>

  </div>
  
</div>
    );
};

export default NewsCard;