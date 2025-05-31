import React from "react";
import Course from "./components/Course";

const Page = async ({ params, searchParams }) => {
  let course_title = await params;
  let course_query = await searchParams;

  // console.log({ course_title, course_query });
  return (
    <>
      <Course />
    </>
  );
};

export default Page;
