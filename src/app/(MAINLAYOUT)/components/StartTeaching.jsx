import Link from 'next/link';
import React from 'react';

const StartTeaching = () => {
    return (
        <div className='grid grid-cols-2 bg-subtle-blue w-full rounded my-12 gap-4' >
            <div className='col-span-2 md:col-span-1 h-full lg:h-[600px] order-1 md:order-0 overflow-hidden flex items-center justify-center' >
                <img src="/images/images/shape.png" alt="Start Teaching image" className='w-full aspect-square lg:h-full lg:object-cover lg:aspect-auto' />
            </div>
            <div className='col-span-2 md:col-span-1 flex md:items-start justify-center flex-col items-center gap-6 lg:gap-12'>
                <p className='text-3xl md:text-4xl  lg:text-5xl font-bold text-center md:text-left pt-12 px-6 xxs:px-12 md:px-0'>Shape Minds, Share Knowledge: Become a Mentor Today!</p>
                <Link href={'/'} className='bg-custom-blue rounded-full px-5 py-2 font-semibold '>Start Teaching Now</Link>
            </div>

        </div>
    );
}

export default StartTeaching;
