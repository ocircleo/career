"use client";
import React, { useEffect, useState } from "react";
import { TfiEmail } from "react-icons/tfi";
import { TbLockPassword } from "react-icons/tb";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import queryParams from "../components/queryParams/queryParams";

const Login = () => {
  const router = useRouter();
  const redirect = () => {
    let redirect_url = queryParams("redirect");
    if (redirect_url) router.replace(redirect_url);
    else router.replace("/");
  };
  const submitHandler = (e) => {
    e.preventDefault();
    let form = e.target;
    let email = form.email.value;
    let password = form.password.value;
    let remember = form.remember.checked;
    console.log({ email, password, remember });
    redirect();
  };
  return (
    <div className="grid grid-cols-2 min-h-screen overflow-y-scroll">
      <LoginForm submitHandler={submitHandler} />
      <div className="lg:col-span-1 col-span-2 hidden lg:block">
        <img
          src="https://i.ibb.co/7g0JY2M/login.png"
          alt="Login image "
          className="w-full h-full object-cover bg-base-200"
        />
      </div>
    </div>
  );
};

export default Login;
//note this
const LoginForm = ({ submitHandler }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center bg-base-100 col-span-2 lg:col-span-1 px-4 sm:px-0">
        <div>
          <Link href={"/"}>
            <img
              src={"/images/logos/logo.png"}
              alt=""
              className="h-16 -translate-x-5"
            />
          </Link>
          <h1 className="text-4xl font-bold pt-8">Log in to your Account</h1>
          <p className="text-sm pt-2">Welcome back! Select method to login</p>
          <form
            onSubmit={submitHandler}
            className="flex flex-col gap-4 w-full sm:w-96  mt-8"
          >
            <fieldset className="join w-full">
              <button
                role="button"
                className="btn  bg-base-300 join-item pointer-events-none"
              >
                <TfiEmail className="text-xl  text-light-gray" />
              </button>
              <input
                name="email"
                type="email"
                required
                className=" join-item border-0 bg-base-300 placeholder:text-light-gray  focus:outline-0 w-full"
                placeholder="Email"
              />
            </fieldset>
            <fieldset className="join relative">
              <button
                type="button"
                className="btn pointer-events-none  bg-base-300 join-item "
              >
                <TbLockPassword className="text-xl  text-light-gray" />
              </button>
              <input
                name="password"
                type={show ? "text" : "password"}
                minLength={6}
                required
                className="input join-item border-0 bg-base-300 placeholder:text-light-gray focus:outline-0 w-full"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="btn  bg-base-300  absolute right-0 top-0 z-10 hover:border-0 "
              >
                {show ? (
                  <FaRegEye className="text-xl  text-light-gray" />
                ) : (
                  <FaRegEyeSlash className="text-xl  text-light-gray" />
                )}
              </button>
            </fieldset>
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="h-4 w-4 cursor-pointer"
                />
                <label
                  htmlFor="remember"
                  className={`text-custom-blue select-none cursor-pointer `}
                >
                  Remember me
                </label>
              </div>
              <Link href="/forgot-password" className="text-info">
                Forgot Password?
              </Link>
            </div>
            <button className="btn btn-block bg-custom-blue font-semibold text-white rounded-lg">
              Login
            </button>
          </form>
          <div className="text-center py-8">
            <Link href="/register">
              <span className="text-primary">Don&apos;t have an account?</span>{" "}
              <span className="text-info">Create an account</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
