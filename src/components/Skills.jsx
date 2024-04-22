import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div id="skills" className="  w-full py-16">
      <div className=" max-w-[1240px] mx-auto flex flex-col justify-center h-full text-center">
        <p className=" text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className=" py-4">What I Can Do</h2>
        <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center ">
              <div className=" m-auto">
                <Image
                  src="/assets/javascript.jpg"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>Javascript</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center ">
              <div className=" m-auto">
                <Image src="/assets/react.jpg" width="64" height="64" alt="/" />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center ">
              <div className=" m-auto">
                <Image
                  src="/assets/angular.jpg"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>Angular</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center ">
              <div className=" m-auto">
                <Image src="/assets/ruby.jpg" width="64" height="64" alt="/" />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>Ruby</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center ">
              <div className=" m-auto">
                <Image
                  src="/assets/Rubyrails.jpg"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>Ruby On Rails</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center ">
              <div className=" m-auto">
                <Image src="/assets/jest.jpg" width="64" height="64" alt="/" />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>Jest</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center ">
              <div className=" m-auto">
                <Image src="/assets/Nest.jpg" width="64" height="64" alt="/" />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>Nest</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center ">
              <div className=" m-auto">
                <Image
                  src="/assets/reacttestinglibary.jpg"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>React Testing Libary</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
