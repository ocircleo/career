import Link from "next/link";
import React from "react";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Page = () => {
  const team = [...new Array(8).keys()];
  return (
    <div className="w-full lg:w-[90%] mx-auto px-3">
      <div className="flex flex-col items-center justify-center bg-base-200 pt-4 pb-12">
        <p className="text-sm font-semibold">Our Team</p>
        <h2 className="text-3xl lg:text-4xl pb-4 pt-2 font-bold text-center">Meet The Team</h2>
        <p className=" text-light-gray text-center">
          There are many variations of passages of Lorem Ipsum available, but <br/>
          the majority have suffered in some form, by injected humour
        </p>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-8 mb-12">
        {team.map((ele) => (
          <TeamCard key={"team" + ele} data={ele}></TeamCard>
        ))}
      </div>
    </div>
  );
};

export default Page;

function TeamCard(data) {
  return (
    <div className="shadow bg-base-100">
      <img
        src="/images/images/team.png"
        className="h-56 w-full object-cover "
      />
      <div className="p-4">
        <p className="font-bold pt-1">Salman Hossain</p>
        <p className="text-sm pb-2">Software engineer</p>
        <p className="text-xs">
          There are many variations of passages of Lorem Ipsum available
        </p>
      </div>
      <div className="flex gap-3 px-4 pb-3">
        <Link href={"/"} className="btn btn-circle">
          <SlSocialFacebook />
        </Link>
        <Link href={"/"} className="btn btn-circle">
          <FaInstagram />
        </Link>
        <Link href={"/"} className="btn btn-circle">
          <FaXTwitter />
        </Link>
      </div>
    </div>
  );
}
