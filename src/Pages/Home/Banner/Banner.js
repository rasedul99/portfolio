import React from "react";
import "./Banner.css";
import rasedul from "../../../Asstes/Image/rasedulIslam.png";
const Banner = () => {
  return (
    <section className="overlay">
      <div className=" w-full  py-9">
        <div className="flex items-center justify-around lg:flex-row-reverse flex-col lg:flex-row">
          <div className="avatar">
            <div
              data-aos="fade-up-left"
              className="w-80 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2"
            >
              <img src={rasedul} alt="" />
            </div>
          </div>
          <div data-aos="fade-up-right" className="px-5">
            <h1 className="text-white text-5xl font-bold animate__animated animate__bounce animate__faster animate__animated animate__fadeInRight animate__bounceOutLeft">
              Hey, I'm{" "}
            </h1>{" "}
            <span className="colourText text-5xl font-bold animate__animated animate__bounce animate__faster animate__animated animate__fadeInRight animate__bounceOutLeft">
              {" "}
              MD Rasedul Islam{" "}
            </span>
            <p className="text-white text-xl italic mt-5 animate__animated animate__bounce animate__repeat-2">
              {" "}
              I develop beautiful user interfaces,{" "}
            </p>
            <p className="text-white text-xl italic animate__animated animate__bounce animate__repeat-2">
              and dynamic web applications.
            </p>
            <div className="mt-8 flex items-center">
              <button
                id="my-modal-5"
                className=" border-2  shadow-white text-white py-3 rounded w-36 font-bold"
              >
                Hire Me
              </button>
              <a href="https://drive.google.com/file/d/1IZfZ8XV3Lxfaxr3GYYLq1j475tKRYQRI/view?usp=share_link">
                <button className="ml-5 border-2  shadow-white text-white py-3 rounded w-36 font-bold">
                  Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
