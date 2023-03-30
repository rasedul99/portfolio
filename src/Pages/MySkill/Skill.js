import React from "react";

const Skill = () => {
  return (
    <div
      data-aos="fade-up-left"
      className="mt-16 mb-32 bg-black-300 py-12 px-12"
    >
      <h3 className="ml-6 text-white text-xl font-bold mt-12">Learned</h3>
      <h1 className="ml-6 text-white text-center text-5xl font-bold mb-5">
        Skills.
      </h1>
      <div>
        <div className="w-full mb-3">
          <h2 className="text-white">HTML</h2>
          <progress
            className="progress progress-secondary w-2/3 bg-white"
            value="90"
            max="100"
          >
            HTML
          </progress>
          90%
        </div>
        <div className="mb-3">
          <h2 className="text-white">CSS</h2>
          <progress
            className="progress progress-primary w-2/3 bg-white"
            value="90"
            max="100"
          >
            CSS
          </progress>
          90%
        </div>
        <div className="mb-3">
          <h2 className="text-white">Bootstrap</h2>
          <progress
            className="progress progress-accent w-2/3 bg-white"
            value="90"
            max="100"
          ></progress>{" "}
          90%
        </div>
        <div className="mb-3">
          <h2 className="text-white">TailwindCSS</h2>
          <progress
            className="progress progress-success w-2/3 bg-white"
            value="90"
            max="100"
          ></progress>
          90%
        </div>
      </div>
      <div>
        <div className="mb-3">
          <h2 className="text-white">Javascript</h2>
          <progress
            className="progress progress-info w-2/3 bg-white"
            value="90"
            max="100"
          ></progress>
          90%
        </div>
        <div className="mb-3">
          <h2 className="text-white">React Js</h2>
          <progress
            className="progress progress-warning w-2/3 bg-white"
            value="90"
            max="100"
          ></progress>
          90%
        </div>
        <div className="mb-3">
          <h2 className="text-white">NodeJS</h2>
          <progress
            className="progress progress-error w-2/3 bg-white"
            value="60"
            max="100"
          ></progress>
          60%
        </div>
        <div className="mb-3">
          <h2 className="text-white">ExpressJS</h2>
          <progress
            className="progress progress-secondary w-2/3 bg-white"
            value="60"
            max="100"
          ></progress>
          60%
        </div>
      </div>
    </div>
  );
};

export default Skill;
