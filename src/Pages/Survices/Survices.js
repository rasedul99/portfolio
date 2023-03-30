import React from "react";
import SingleService from "./SingleService";
import "./Service.css";

const Survices = () => {
  const services = [
    {
      id: 1,
      image: "https://i.ibb.co/hcw4jSM/New-Project-2.png",
      title: "Frontend Developer",
      description: "",
    },
    {
      id: 2,
      image:
        "https://i.ibb.co/QdVLLhC/full-stack-developer-mern-1024x1024-1-1024x1024.png",
      title: "MERN Stack Developer",
      description: "",
    },
    {
      id: 3,
      image: "https://i.ibb.co/3h25TqM/New-Project.png",
      title: "Backend developer",
      description: "",
    },
  ];
  return (
    <section className="bgColor">
      <div data-aos="fade-up-left" className="mb-12 px-5">
        <div className="flex justify-center">
          <progress className="progress w-56 text-center bg-sky-600 text-pink-100"></progress>
        </div>
        <h3 className="ml-6 text-white text-xl font-bold mt-12">
          Introduction
        </h3>
        <h1 className="ml-6 text-white text-center text-5xl font-bold mb-5">
          Overview.
        </h1>
        <p className="ml-6 mr-6 text-white max-w-lg">
          ➙ I am a 𝗙𝗿𝗼𝗻𝘁𝗲𝗻𝗱 𝗪𝗲𝗯 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 with experience in building websites
          and web applications. ➙ I specialize in 𝐉𝐚𝐯𝐚𝐒𝐜𝐫𝐢𝐩𝐭 and have experience
          working with 𝐑𝐞𝐚𝐜𝐭.𝐣𝐬, 𝐓𝐚𝐢𝐥𝐰𝐢𝐧𝐝, 𝐁𝐨𝐨𝐭𝐬𝐭𝐫𝐚𝐩, 𝐄𝐱𝐩𝐫𝐞𝐬𝐬.𝐣𝐬, 𝐍𝐨𝐝𝐞.𝐣𝐬 𝐚𝐧𝐝
          𝐨𝐭𝐡𝐞𝐫 𝐟𝐫𝗼𝐧𝐭𝐞𝗻𝐝 𝐚𝐧𝐝 𝐛𝐚𝐜𝐤𝐞𝐧𝐝 𝐭𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐢𝐞𝐬. ➙ I enjoy building websites
          and have learned 𝐌𝐄𝐑𝐍 𝐒𝐭𝐚𝐜𝐤 𝐖𝐞𝐛 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭. which allows me to create
          interactive, responsive, and dynamic web pages that are sure to leave
          a lasting impression. Let's work together to elevate your online
          presence and achieve success beyond your expectations.{" "}
        </p>
      </div>

      <div
        className="mt-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 p-4 serviceOverlay"
        data-aos="fade-up-right"
      >
        {services.map((service) => (
          <SingleService key={service.id} service={service}></SingleService>
        ))}
      </div>
    </section>
  );
};

export default Survices;
