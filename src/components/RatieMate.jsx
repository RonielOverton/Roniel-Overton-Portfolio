import React from "react";
import Link from "next/link";
import Image from "next/image";
import Dialog from "./Modal";

const RatieMate = ({ title, backgroundImg, projectUrl }) => {
  async function onClose() {
    console.log("Modal has closed");
  }
  async function onOk() {
    console.log("Ok was clicked");
  }

  return (
    <>
      <Dialog title="modal test" onClose={onClose} onOk={onOk}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          nisi nam dolore, quaerat eligendi dolor animi velit natus molestias
          maiores voluptatum dignissimos perspiciatis est blanditiis tempore,
          recusandae illo minus voluptatem.
        </p>
      </Dialog>
      <div className=" relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ">
        <Image
          className=" rounded-xl group-hover:opacity-10"
          src={backgroundImg}
          alt="/"
        />
        <div className=" hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className=" text-2xl text-white tracking-wider text-center">
            {title}
          </h3>
          <p className=" pb-4 pt-2 text-white text-center">
            React/Ruby On Rails Capstone Project{" "}
          </p>
          <Link href={projectUrl}>
            <p className=" text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
              More Info
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default RatieMate;
