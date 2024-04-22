import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="w-full flex items-center text-center py-6   
      "
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className=" uppercase text-xl tracking-widest text-[#5651e5] ">
            About
          </p>
          <h2 className=" py-2">Who I Am</h2>
          <p className=" py-2 text-gray-600">
            I'm a full-stack developer specializing in Angular | React |
            Typescript | Nest.js. I am an advocate for TDD and used Jest and
            React Testing Library on recent projects. I am currently learning
            more about React.
          </p>
        </div>
        <div className=" w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className=" rounded-xl"
            src="/assets/Me.jpg"
            alt="/"
            width="825"
            height="800"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
