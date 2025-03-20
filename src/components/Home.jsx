import React from "react";
import { ReactTyped } from "react-typed";

import profImg from "/profImg.jpg";

import { FaInstagram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a </h1>
              {/* <span className="text-red-700 font-bold">Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              I am a MERN Stack Developer with expertise in MongoDB, Express.js,
              React, and Node.js, specializing in building scalable and
              high-performance web applications. Proficient in JavaScript
              (ES6+), RESTful APIs, authentication (JWT, OAuth), and state
              management (Redux, Context API), I develop dynamic and
              user-friendly applications.
              <br />
              I have experience with real-time
              applications (Socket.io), cloud services (AWS, Firebase), and
              CI/CD pipelines. Passionate about clean code, security, and
              performance optimization, I thrive in Agile environments. A strong
              problem solver and team player, I collaborate effectively to
              deliver impactful solutions. Let’s build something innovative
              together! 🚀
            </p>
            <br />
            {/* Social Media Icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href=""></a>
                    <FaInstagram className="text-2xl cursor-pointer" />
                  </li>
                  <li>
                    {""}
                    <BsLinkedin className="text-2xl cursor-pointer" />
                  </li>
                  <li>
                    {""}
                    <FaGithub className="text-2xl cursor-pointer" />
                  </li>
                  <li>
                    {""}
                    <IoLogoYoutube className="text-2xl cursor-pointer" />
                  </li>
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={profImg}
              alt=""
              className="rounded-full md:w-[450px] md:h-[450px]"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Home;
