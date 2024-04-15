import React from "react";
import ratiemate from "/public/assets/ratieimg.jpg";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const RatieMate = () => {
  return (
    <div className=" w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className=" absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className=" absolute z-1"
          layout="fill"
          objectFit="cover"
          src={ratiemate}
          alt="/"
        />
        <div className=" absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2>Ratie Mate</h2>
          <h3>React / Ruby On Rails</h3>
        </div>
      </div>

      <div className=" max-w-[1240px] mx-auto p-2 md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Ratie Mate is a movie rating application created by: Tori Calkins,
            Adrian Ramirez, Ilene Varela-Zul and Roniel Overton. This
            appilcation was created to showcase the knowledge and skills
            acquired throughout our time at LEARN Academy as our final project
            "Capstone" before we start our interships. Us at Ratie Mate hope
            that you can view our app and be inspired to create your own web
            appilcation at some point.
          </p>
          <button className=" px-8 py-2 mt-4 mr-8">Demo</button>
          <button className=" px-8 py-2 mt-4">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Javascript
              </p>
              <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Ruby On Rails
              </p>
              <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React Testing Library
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className=" underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default RatieMate;
