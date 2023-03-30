import React from 'react';

const Project = ({ project }) => {
    const { title, image } = project;
    return (

        <div data-aos="flip-right" className="card bg-base-100 shadow-xl">
            {/* <figure><img src={image} className="" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    <div className=" text-white font-bold text-2xl">{title}</div>
                </h2>
                <h2 className='text-lg text-white'>Technology</h2>
                <div className="card-actions">
                    <div className="badge badge-outline">HTML</div>
                    <div className="badge badge-outline">TailwindCSS</div>
                    <div className="badge badge-outline">React</div>
                    <div className="badge badge-outline">NodeJs</div>
                    <div className="badge badge-outline">MongoDB</div>
                    <div className="badge badge-outline">Express.js</div>
                    <div className="badge badge-outline">Firebase</div>
                </div>
            </div>
            <button className="btn btn-outline btn-secondary">View Details</button> */}
        </div>
    );
};

export default Project;