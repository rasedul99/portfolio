import React from 'react';
import laptop1 from '../../Asstes/Laptop/laptop1.PNG'
import laptop2 from '../../Asstes/Laptop/laptop2.PNG'
import laptop3 from '../../Asstes/Laptop/laptop3.PNG'
const Laptop = () => {
    return (
        <div className="mt-10">
            <div>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img
                            style={{ height: "700px" }}
                            src={laptop1}
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
                            src={laptop2}
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
                            src={laptop3}
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
            <h2 className="py-3 px-3  flex items-center">  1. In this project, some categories are shown first, if the user clicks on that category,<br />  if he is not logged in, he will be taken to the login page, and after logging in, the user can see those products.<br /><br />
                2. I used this project React Router which makes it easy to move from one place to another. <br /><br />
                3.  In this project I have used authentication, through which user can login and register <br /> <br />
                4. After viewing the page, the user can book the product, after booking, the user will receive a confirmation message.<br /> <br />
                5.This project has a dashboard where users can add products, and the data of the seller, <br /> the data of the buyer, and the data of the user to be added are shown on the dashboard.</h2>
            6. If you add it to the user dashboard, you will see that data category when you go to the router
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
                <a href='https://used-products-laptop-market.web.app/' className="btn my-5 btn-secondary">
                    Live site
                </a>
                <a href='https://github.com/sagormahamud007/Laptop_market_client_side' className="btn my-5 btn-secondary">
                    Client site
                </a>
                <a href='https://github.com/sagormahamud007/Laptopo_Market' className="btn my-5  btn-secondary">
                    Server site
                </a>
            </div>
        </div>

    );
};

export default Laptop;