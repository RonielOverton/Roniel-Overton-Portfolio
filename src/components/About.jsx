import React from "react";
import Image from "next/image";

const About = () => {
  return (

    <div
      id="about"
      className="w-full md:h-screen flex items-center text-center py-16"
    >

      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className=" uppercase text-xl tracking-widest text-[#5651e5] ">
            About
          </p>
          <h2 className=" py-2">Who I Am</h2>
          <p className=" py-2 text-gray-600">
            My journey into programming began with a thirst for knowledge and a
            determination to master the craft. I'm dedicated to continuous
            learning and keeping up with the ever-evolving tech landscape.I
            possess a strong knack for breaking down complex problems and
            finding creative solutions. I believe that every challenge is an
            opportunity to learn and grow.I've had the privilege of working with
            diverse teams and individuals from various backgrounds. My ability
            to communicate effectively and collaborate makes me a valuable team
            player.Building Foundations: Every coder starts somewhere, and I'm
            committed to building a strong foundation in programming. I'm
            currently focusing on learning React and Ruby on Rails, and I'm
            excited to see where this journey takes me.
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
