import React from 'react';
import fashion1 from '../../Asstes/Fashion/fashion1.PNG'
import fashion2 from '../../Asstes/Fashion/fashion2.PNG'
import fashion3 from '../../Asstes/Fashion/fashion3.PNG'

const Fashion = () => {
    return (
        <div className="mt-10">
            <div>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img
                            style={{ height: "700px" }}
                            src={fashion1}
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
                            src={fashion2}
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
                            src={fashion3}
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
            <p className="py-3 text-4xl font-bold text-secondary px-3">Project Details :</p>
            <h2 className="py-3 px-3  flex items-center">  1. First, I install all the project's recommendations, then finish the route definition, and then <br /> bring a header from bootstrap to the home page and show it in the navbar. <br /><br />
                2. Then sign in and login to login and sign in Design the form, then go to Firebase and install <br /> Firebase, then open the project in Firebase and complete the login and sign-in authentication. <br /><br />
                3.  Then on the home page a slider shows some images with it, then I go to the server site where the server is <br /> running on  5000 prot, after starting the server I connect to the mongdb database. <br /> <br />
                4. I put 6 services in that MongDB, then from the server site, from that database, through the server site, I brought all <br /> the data and showed it on the client site, first on the home page, I showed 3 through the limit on the server site.<br /> <br />
                5. Then show 6 data on the service page, then put the user data in MongDB and bring that data and show it on my review <br /> page, there is a block section where there are 4 questions, the user is allowed to order on my service page etc.</h2>
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
                <a href='https://wedding-photographer-1bcb6.web.app/' className="btn my-5 btn-secondary w-36">
                    Live site
                </a>
                <a href='https://github.com/sagormahamud007/Fashion_Photograher_Client_Side-' className="btn my-5  btn-secondary w-36">
                    Client site
                </a>
                <a href='https://github.com/sagormahamud007/Fashion_Photograher_Server_Site' className="btn my-5   btn-secondary w-36">
                    Server site
                </a>
            </div>
        </div>
    );
};

export default Fashion;