import React from "react";
import "./Introduce.css";
import logo3w from "../../../Asstes/Image/3w.jpg";
import programminghero from "../../../Asstes/Image/programminghero.png";
import diu from "../../../Asstes/Image/diu.png";
const Introduce = () => {
  return (
    <div>
      <h3 className="text-center text-white text-5xl font-bold my-12">
        Professional experience && Training && Education
      </h3>

      <div className="mt-6 max-w-7xl mx-auto w-full grid grid-cols-9 px-2 ">
        <div class="col-span-4 w-full h-full ">
          <div className="w-full h-full bgColor2 card  shadow-md bg-blend-hard-light  border-b-2  shadow-white border-white rounded-md p-2 md:pl-4 ">
            <h1 className="text-white text-xl font-bold py-2">
              Frontend Developer (Internship)
            </h1>
            <div className="flex justify-between">
              <h3 className="text-white  ">3W</h3>
              <h3 className="text-white  ">March 2023– Present</h3>
            </div>
            <p className="text-gray-100 sm:text-sm text-xs mt-2">
              1. Implemented websites, and landing pages from concept through
              deployment .
            </p>
            <p className="text-gray-100 sm:text-sm text-xs mt-2">
              2. Standardized all output with a new, responsive, mobile-first
              approach and strategy.
            </p>
            <p className="text-gray-100 sm:text-sm text-xs mt-2">
              3.Collaborated with product team members to implement new
              features.
            </p>
          </div>
        </div>
        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
          <div class="h-full w-1 bg-indigo-300"></div>
          <img
            class="absolute w-10 h-10 rounded-full bg-indigo-400 z-10 text-white text-center"
            src={logo3w}
          />
        </div>
        <div class="col-span-4 w-full h-full"></div>
        <div class="col-span-4 w-full h-full"></div>
        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
          <div class="h-full w-1 bg-indigo-300"></div>
          <img
            class="absolute w-10 h-10 rounded-full bg-indigo-400 z-10 text-white text-center"
            src={programminghero}
          />
        </div>

        <div class="col-span-4 w-full h-full ">
          <div className="w-full h-full bgColor2 card  shadow-md bg-blend-hard-light  border-b-2  shadow-white border-white rounded-md p-2 md:pl-4 ">
            <h1 className="text-white text-xl font-bold py-2">
              Web Development
            </h1>
            <div className="flex justify-between">
              <h3 className="text-white  ">Programming Hero</h3>
              <h3 className="text-white  ">Duration: 6 Months</h3>
            </div>
            <p className="text-gray-100 sm:text-sm mt-2 text-xs">
              {" "}
              1. Understanding of the MERN architecture: i learn how each
              component of the MERN stack works together to create a full-stack
              web application.
            </p>
            <p className="text-gray-100 sm:text-sm mt-2 text-xs">
              2. Creating a RESTful API with Node.js and Express.js: i learn how
              to create a backend API using Node.js and Express.js that
              communicates with a MongoDB database.
            </p>
            <p className="text-gray-100 sm:text-sm mt-2 text-xs">
              3. Building a frontend with React.js: i learn how to use React.js
              to build a responsive and dynamic frontend for your web
              application.
            </p>
            <p className="text-gray-100 sm:text-sm mt-2 text-xs">
              4. Connecting the frontend and backend: i learn how to connect the
              frontend and backend of your application using API calls.
            </p>
            <p className="text-gray-100 sm:text-sm mt-2 text-xs">
              5. Authentication and Authorization: i learn how to implement
              authentication and authorization in your MERN stack application to
              ensure that only authorized users can access certain parts of your
              application.
            </p>
          </div>
        </div>

        <div class="col-span-4 w-full h-full ">
          <div className="w-full h-full bgColor2 card  shadow-md bg-blend-hard-light  border-b-2  shadow-white border-white rounded-md p-2 md:pl-4 ">
            <h1 className="text-white text-xl font-bold py-2">BSC In CSE</h1>
            <div className="flex justify-between">
              <h3 className="text-white  ">
                Daffodil International University
              </h3>
              <h3 className="text-white  ">Duration: 4 Years</h3>
            </div>
            <p className="text-gray-100 sm:text-sm mt-2 text-xs">
              In a CSE course, i learn about programming languages, data
              structures and algorithms, operating systems, computer
              organization and architecture, computer networks, database
              systems, software engineering, and web development.
            </p>
          </div>
        </div>
        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
          <div class="h-full w-1 bg-indigo-300"></div>
          <img
            class="absolute w-10 h-10 rounded-full bg-white z-10 text-white text-center"
            src={diu}
          />
        </div>
        <div class="col-span-4 w-full h-full"></div>
        <div class="col-span-4 w-full h-full"></div>
      </div>
      <div className="ml-20 mt-20 flex justify-evenly">
        <img
          className="w-12 hover:shadow-xl hover:translate-y-6 hover:transition-all shadow-md bg-blend-hard-light  border-2  shadow-white border-red h-12  rounded-full bg-white"
          src="https://i.ibb.co/Bc4B7Sx/reactjs.png"
        />
        <img
          className="w-12 hover:shadow-xl hover:translate-y-6 hover:transition-all shadow-md bg-blend-hard-light  ml-2 border-2  shadow-white border-red h-12 rounded-full bg-white"
          src="https://i.ibb.co/g3tfXNh/New-Project-7.png"
        />
        <img
          className="w-12 hover:shadow-xl hover:translate-y-6 hover:transition-all p-1 shadow-md bg-blend-hard-light  ml-2 border-2  shadow-white border-red h-12 rounded-full bg-white"
          src="https://i.ibb.co/syCFhxQ/New-Project-8.png"
        />
        <img
          className="w-12 hover:shadow-xl hover:translate-y-6 hover:transition-all shadow-md bg-blend-hard-light  ml-2 border-2  shadow-white border-red h-12 rounded-full bg-white p-1"
          src="https://i.ibb.co/2PNP9Sg/New-Project-9.png"
        />
        <img
          className="w-12 hover:shadow-xl hover:translate-y-6 hover:transition-all shadow-md bg-blend-hard-light  ml-2 border-2  shadow-white border-red h-12 rounded-full bg-white"
          src="https://i.ibb.co/LQYRB53/New-Project-10.png"
        />
        <img
          className="w-12 hover:shadow-xl hover:translate-y-6 hover:transition-all p-1 shadow-md bg-blend-hard-light  ml-2 border-2  shadow-white border-red h-12 rounded-full bg-white"
          src="https://i.ibb.co/272rFVr/New-Project-11.png"
        />
        <img
          className="w-12 hover:shadow-xl hover:translate-y-6 hover:transition-all p-1 shadow-md bg-blend-hard-light  ml-2 border-2  shadow-white border-red h-12 rounded-full bg-white"
          src="https://i.ibb.co/VJhjYk0/New-Project-12.png"
        />
      </div>
    </div>
  );
};

export default Introduce;
