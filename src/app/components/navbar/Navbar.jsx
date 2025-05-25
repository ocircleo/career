'use client';
import { useEffect, useState } from 'react';
import ThemeButton from "@/app/components/theme/ThemeButton"
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import Link from 'next/link'

const Navbar = () => {
    const [show, setShow] = useState(false);
    const toggleNav = () => {
        setShow(!show);
    };
    return (
        <div className='bg-base-100'>
            <div className="navbar  h-20  w-full lg:w-[90%] mx-auto">
                {/* logo */}
                <div className="navbar-start">
                    <Link href={"/"} className="btn btn-ghost text-xl"><img src={"/images/logos/logo.png"} alt="alt" className='h-full' /></Link>
                    <div className=" hidden lg:flex font-semibold">
                        <ul className="menu menu-horizontal px-1">

                            <li className="bg-base-300 text-custom-blue"><Link href={'/'}>Home</Link></li>
                            <li><a>Bootcamp</a></li>
                            <li><a>Testimonials</a></li>
                        </ul>
                    </div>
                </div>

                {/* side icons for profile and search and hamburger*/}
                <div className="navbar-end">
                    <Search />
                    <ThemeButton />
                    <Profile />

                    {/* small screen dropdown */}
                    <div className="lg:hidden">

                        <div role="button" onClick={toggleNav} className="btn btn-ghost btn-circle">
                            <GiHamburgerMenu className='text-2xl' />
                        </div>
                        <div
                            id='dropdown'
                            className={`bg-base-300  z-50  fixed ${show ? "left-0" : "left-full"} duration-100 top-0 shadow w-full h-screen`}>
                            <Dropdown toggleNav={toggleNav} />

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Navbar;


function Profile() {
    return (<>
        <div className="hidden lg:dropdown dropdown-end">
            {/* if user is not logged in then show this dropdown */}

            <div tabIndex={1} role="button" className="btn btn-ghost btn-circle avatar ms-8">
                <button className='btn bg-custom-blue text-white'>Get Started</button>
            </div>
            <ul
                tabIndex={1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><Link href="/login">Login</Link></li>
                <li><Link href="/register">Register</Link></li>
            </ul>

            {/* If User is  logged in then show this dropdown */}
            {/* <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
            </ul> */}
        </div>
    </>)
}

function Search() {
    return (<>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button className="btn border-none lg:hidden" onClick={() => document.getElementById('my_modal_2').showModal()}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
        </button>
        {/* This is a modal. for small screen */}
        <dialog id="my_modal_2" className="modal modal-top lg:hidden">

            <div className="modal-box pb-8" >
                {/* This form will close the modal when clicked. */}
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                {/*-------------- Main Modal Content----------------- */}
                <h3 className="font-bold pb-4">Perform Search </h3>
                <div className="join lg:hidden  rounded bg-accent w-full">
                    <input type="text" className="input join-item border-0 bg-base-300 focus:outline-0 w-full" placeholder="Search" />
                    <button className="btn  bg-base-300 join-item " >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
                    </button>
                </div>
            </div>
            {/* This form will close the modal if clicked outside (dialog method closes a modal) */}
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>


        {/* This is default searchbar for large screen */}
        <div className="hidden lg:join  rounded-full bg-accent">
            <input type="text" className="input join-item border-0 bg-base-300 focus:outline-0 w-60" placeholder="Search" />
            <button className="btn  bg-base-300 join-item " >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
            </button>
        </div>
    </>)
}

function Dropdown({ toggleNav }) {
    return (<>
        <div className='navbar justify-between w-full h-20  items-center'>
            <a className="btn btn-ghost text-xl"><img src={"/images/logos/logo.png"} alt="alt" className='h-full' /></a>
            <button className="btn btn-sm btn-circle btn-ghost  text-lg" onClick={toggleNav}><RxCross1 className='text-xl font-semibold' /></button>
        </div>

        <ul className="menu bg-base-200 rounded-box w-full h-full overflow-y-scroll
        ">
            <li><a>Home</a></li>
            <li><a>Bootcamp</a></li>
            <li><a>Testimonials</a></li>
            <li>
                <DropdownSubMenuAccount />
            </li>
        </ul>
    </>)
}
function DropdownSubMenuAccount() {
    return (<>
        {/* If User is not logged in then show this dropdown */}
        <details open>
            <summary className='bg-base-300'>Get Started</summary>
            <ul>
                <li><a>Login</a></li>
                <li><a>Register</a></li>

            </ul>
        </details>


        {/* If User is logged in then show this dropdown */}
        {/* <details open>
            <summary className='bg-base-300'>
                <div className="w-8 h-8 rounded-full">
                    <img className='rounded-full'
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
                Account
            </summary>
            <ul>
                <li><a>Courses</a></li>
                <li><a>Profile</a></li>
                <li><a>Logout</a></li>

            </ul>
        </details> */}

    </>)
}

