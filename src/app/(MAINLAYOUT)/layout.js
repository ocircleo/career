"use client";
import React, { useEffect } from "react";
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/footer/Footer";

const MainLayout = ({ children }) => {
  //Theme changer event Handler DARK or LIGHT

  return (
    <div className="min-h-screen w-full bg-base-200 flex flex-col justify-between">
      <Navbar></Navbar>
      <div className=" w-full grow">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
