import Link from 'next/link';
import React from 'react';

const Stories = () => {
    return (
        <div className='grid grid-cols-5  w-full rounded my-12 gap-4 px-2' >

            <div className='col-span-5 md:col-span-2 flex md:items-start justify-center flex-col items-center gap-6 lg:gap-12'>
                <div className="flex flex-col px-10 lg:px-0  items-center md:items-start justify-center gap-6">
                    <p className="text-xs font-bold px-2 py-1  bg-info/10 rounded-full text-custom-blue ">
                        TESTIMONIALS
                    </p>
                    <p className="text-2xl lg:text-4xl font-bold text-center lg:text-start">
                        Unlocking Success Stories from Our Students
                    </p>
                    <p>Discover the transformative journey of our students through their testimonials. These stories speak to the impact our courses have had on their professional and personal lives. </p>
                    <Link href={"/"} className=' font-semibold px-4 py-2 text-custom-blue border-2 border-custom-blue rounded-full'>View More</Link>
                </div>
            </div>
            <div className='col-span-5 md:col-span-3 h-full lg:h-[600px]  overflow-hidden flex items-center justify-center' >
                <div className=''>
                    <img src="/images/images/video.png" alt="Start Teaching image" className='w-full aspect-video lg:h-full lg:object-cover lg:aspect-auto' />
                    <div className='grid grid-cols-3 mt-8 h-36'>
                        <img src="/images/images/video1.png" alt="sub video" className='w-full aspect-video bg-subtle-blue p-1 object-cover  rounded-xl lg:rounded-3xl' />
                        <img src="/images/images/video2.png" alt="sub video" className='w-full aspect-video bg-subtle-blue p-1 object-cover rounded-xl  lg:rounded-3xl shrink' />
                        <img src="/images/images/video3.png" alt="sub video" className='w-full aspect-video bg-subtle-blue p-1 object-cover rounded-xl lg:rounded-3xl shrink'  />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stories;
