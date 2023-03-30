import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import learning1 from '../../Asstes/Learning/learning1.png'
import learning2 from '../../Asstes/Learning/learning2.png'
import learning3 from '../../Asstes/Learning/learning3.png'
import learning4 from '../../Asstes/Learning/learning4.png'

const Details = () => {


  // const view = Overview.split(",");
  // console.log(view);

  return (
    <div className="mt-10">
      <div>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              style={{ height: "700px" }}
              src={learning4}
              className="w-full "
              alt=""
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              style={{ height: "700px" }}
              src={learning3}
              className="w-full"
              alt=""
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              style={{ height: "700px" }}
              src={learning2}
              className="w-full"
              alt=""
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <h2 className="card-title text-4xl py-8"></h2>
      </div>
      <p className="py-3 text-4xl font-bold text-secondary px-3">Project Details :</p>
      <h2 className="py-3 px-3  flex items-center">  1. First I install the React Router DOM application, then I finish the React Router definition. <br /><br />
        2. I have used firebase authentication in this project, for that I have to go to firebase and install their application and do the login and register correctly as shown by them. <br /><br />
        3.  Then I entered the fake data on the server site and displayed that data on my site using React Hook, then clicking on all that data will show the details. <br /> <br />
        4. I have designed a 404 page, if someone writes something wrong in the URL, then that page will show., then I have designed the home page, then if someone goes to the details page, from there they can download the details page as PDF. , the name of the user will be displayed if the mouse is taken over the user's picture <br /> <br />
        5. Applications used in this project include React Bootstrap Framework, React Router DOM, Firebase,Deploying this project to Firebase, along with that I have also deployed the server site</h2>
      <p className="text-3xl text-secondary mb-5 px-3 font-bold">Technology :</p>
      <div className="card-actions px-3">
        <div className="badge badge-outline">HTML</div>
        <div className="badge badge-outline">TailwindCSS</div>
        <div className="badge badge-outline">React</div>
        <div className="badge badge-outline">NodeJs</div>
        <div className="badge badge-outline">MongoDB</div>
        <div className="badge badge-outline">Express.js</div>
        <div className="badge badge-outline">Firebase</div>
      </div>
      <div className="py-3 w-11/12 mx-auto flex flex-col sm:flex-row sm:justify-around text-center">
        <a href='https://learning-courses-18e76.web.app/' className="btn my-5 btn-secondary  md:w-100">
          Live site
        </a>
        <a href='https://github.com/sagormahamud007/Learning_Platf' className="btn my-5  btn-secondary ">
          Client site
        </a>
        <a href='https://github.com/sagormahamud007/Learning_platf_server_site' className="btn my-5  btn-secondary ">
          Server site
        </a>
      </div>
    </div>

  );
};

export default Details;
