'use client';
import Link from 'next/link';
import React from 'react';

const CoursePrice = () => {
    return (
        <div className=' w-full md:absolute bg-base-100 p-1 top-12  z-10'>
            <div className='w-full aspect-video bg-base-300 grid place-content-center text-neutral'>
                img or video
            </div>
            <div role="tablist" className="tabs tabs-border">
                <a role="tab" className="tab tab-active shrink-0 grow  text-indigo-500 font-semibold">Personal</a>
                <a role="tab" className="tab shrink-0 grow">Teams</a>

            </div>
            <div className='p-4'>
                <div className='flex gap-2 items-center'>
                    <p className='font-bold text-xl'>$10.99</p>
                    <span className='text-sm text-gray-500 flex gap-2'>
                        <del>70.99</del>
                        <p>85% off</p>
                    </span>

                </div>
                <p className='text-sm text-red-500 py-2 '>Only 1 Day left at this price</p>
                <div className='flex gap-2 flex-col my-3'>
                    <Link href="?" className='btn btn-primary'>Add To Cart</Link>
                    <Link href="?" className='btn btn-outline btn-primary'>Buy Now</Link>
                </div>
                <div className='text-center text text-sm text-gray-500'>
                    <p>30 Days Money Back Grantee</p>
                    <p>Full Lifetime access</p>

                </div>
                <div className='text-indigo-500 gap-4 my-3 flex'>
                    <p className='border-b-2 border-indigo-500 border-dashed'>Share</p>
                    <p className='border-b-2 border-indigo-500 border-dashed'>Gift This Course</p>
                </div>

            </div>

        </div>
    );
}

export default CoursePrice;
