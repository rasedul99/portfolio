import React from "react";
import { Link } from "react-router-dom";
import helloFoods from "../../Asstes/Projects/tatytreat.png";
import dreamhouse from "../../Asstes/Projects/dreamhouse.png";
import cryptocafe from "../../Asstes/Projects/cryptocafe.png";
const Projects = () => {
  return (
    <div className="mt-16 ml-10 mr-10">
      <h3 className="ml-6 text-white text-xl font-bold mt-12">My Work</h3>
      <h1 className="ml-6 text-white text-center text-5xl font-bold mb-5">
        Projects.
      </h1>
      <div className="flex justify-center">
        <progress className="progress w-56 text-center bg-sky-600 text-pink-100"></progress>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-7 p-5">
        <div
          data-aos="flip-right"
          className="bgColor2 card  shadow-md bg-blend-hard-light  border-b-2  shadow-white border-white rounded-md p-2  "
        >
          <figure>
            <img
              src={helloFoods}
              className="rounded h-full w-full"
              alt="HelloFoods"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <div className=" text-white font-bold text-2xl">Hello Foods</div>
            </h2>
            <h2 className="text-lg text-white">Technology</h2>
            <div className="card-actions mb-0">
              <div className="badge text-white badge-outline">HTML</div>
              <div className="badge text-white badge-outline">TailwindCSS</div>
              <div className="badge text-white badge-outline">React</div>
              <div className="badge text-white badge-outline">Redux</div>
            </div>
          </div>
          <div>
            <a href="https://hellofoods.netlify.app/">
              <button className="ml-5 border-2  shadow-white text-white py-3 rounded p-2 font-bold">
                Live Site
              </button>
            </a>
            <a href="https://github.com/rasedul99/food-order">
              <button className="ml-5 border-2  shadow-white text-white py-3 rounded p-2 font-bold">
                Github
              </button>
            </a>
          </div>
        </div>

        <div
          data-aos="flip-right"
          className="bgColor2 card  shadow-md bg-blend-hard-light  border-b-2  shadow-white border-white rounded-md p-2  "
        >
          <figure>
            <img src={dreamhouse} className="rounded" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <div className=" text-white font-bold text-2xl">Dream House</div>
            </h2>
            <h2 className="text-lg text-white">Technology</h2>
            <div className="card-actions mb-0">
              <div className="badge text-white badge-outline">HTML</div>
              <div className="badge text-white badge-outline">TailwindCSS</div>
              <div className="badge text-white badge-outline">React</div>
              <div className="badge text-white badge-outline">Context API</div>
            </div>
          </div>
          <div>
            <a href="https://rent-dream-house.netlify.app/">
              <button className="ml-5 border-2  shadow-white text-white py-3 rounded p-2 font-bold">
                Live Site
              </button>
            </a>
            <a href="https://github.com/rasedul99/dream-house">
              <button className="ml-5 border-2  shadow-white text-white py-3 rounded p-2 font-bold">
                Github
              </button>
            </a>
          </div>
        </div>

        <div
          data-aos="flip-right"
          className="bgColor2 card  shadow-md bg-blend-hard-light  border-b-2  shadow-white border-white rounded-md p-2  "
        >
          <figure>
            <img src={cryptocafe} className="rounded" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <div className=" text-white font-bold text-2xl">cryptocafe</div>
            </h2>
            <h2 className="text-lg text-white">Technology</h2>
            <div className="card-actions mb-0">
              <div className="badge text-white badge-outline">HTML</div>
              <div className="badge text-white badge-outline">TailwindCSS</div>
              <div className="badge text-white badge-outline">React</div>
            </div>
          </div>
          <div>
            <a href="https://crypto-cafe-demo.netlify.app/">
              <button className="ml-5 border-2  shadow-white text-white py-3 rounded p-2 font-bold">
                Live Site
              </button>
            </a>
            <a href="https://github.com/rasedul99/crypto-cafe">
              <button className="ml-5 border-2  shadow-white text-white py-3 rounded p-2 font-bold">
                Github
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
