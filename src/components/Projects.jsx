import React from "react";
import Image from "next/image";
import ratiemate from "/public/assets/ratieimg.jpg";
import Link from "next/link";
import RatieMate from "./RatieMate";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className=" max-w-[1240px] m-auto px-2 py-16 text-center">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've built</h2>
        <div className="grid items-center  gap-8">
          <RatieMate
            title="Ratie Mate"
            backgroundImg={ratiemate}
            projectUrl="/RatieMate"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
