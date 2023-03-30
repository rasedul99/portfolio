import React from 'react';


const SingleService = ({ service }) => {
    const { image, title, description } = service;
    return (
        <div className="bgColor2 card  shadow-md bg-blend-hard-light border-2  shadow-white border-white hover:shadow-xl hover:translate-y-6 hover:transition-all">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-white">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default SingleService;