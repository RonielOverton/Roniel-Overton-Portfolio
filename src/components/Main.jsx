import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Main() {
  return (
    <div id="home" className="w-full h-full  p-20 text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center text-center">
        <div>
          <p className="w-full md:h-full uppercase text-sm tracking-widest text-gray-600 ">
            Let's build something legendary together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi I'm <span className="p-4 text-[#5651e5]">Roniel</span>
          </h1>
          <h1 className="py-1 text-gray-700">A Fullstack Web Developer</h1>

          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a full-stack developer specializing in Angular | React |
            Typescript | Nest.js. I am an advocate for TDD and used Jest and
            React Testing Library on recent projects. I am currently learning
            more about Angular. To see some examples of my work please visit my
            Github
          </p>

          <div class="flex items-center justify-between max-w-[330px] m-auto py-8">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                href="https://www.linkedin.com/in/roniel-overton/"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </div>

            <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a href="https://github.com/RonielOverton" target="_blank">
                <FaGithub />
              </a>
            </div>

            <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a href="mailto:ronielo86@gmail.com" target="_blank">
                <AiOutlineMail />
              </a>
            </div>
            {/* <div className=" sm:max-w-[10%] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">

              <BsFillPersonLinesFill />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
