import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Asstes/Image/logo.png";

const Navbar = () => {
  const scroll = (p) => {
    window.scroll({
      top: p,
      behavior: "smooth",
    });
  };

  return (
    <div className="navbar px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button
                onClick={() => scroll(0)}
                className="ml-7 text-lg hover:text-secondary"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scroll(0)}
                className="ml-7 text-lg hover:text-secondary"
              >
                Service
              </button>
            </li>
            <li>
              <button
                onClick={() => scroll(1000)}
                className="ml-7 text-lg hover:text-secondary"
              >
                Project
              </button>
            </li>
            <li>
              <button
                onClick={() => scroll(1300)}
                className="ml-7 text-lg hover:text-secondary"
              >
                Skill
              </button>
            </li>
            <li>
              <button
                onClick={() => scroll(1500)}
                className="ml-7 text-lg hover:text-secondary"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case font-lg font-mono text-secondary text-4xl"
        >
          <img className="w-14" src={logo}></img>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">
              <button
                onClick={() => scroll(0)}
                className="text-white ml-2 text-lg hover:text-secondary"
              >
                Home
              </button>
            </Link>
          </li>
          <li>
            <button
              onClick={() => scroll(2000)}
              className=" text-white text-lg hover:text-secondary"
            >
              Project
            </button>
          </li>
          <li>
            <button
              onClick={() => scroll(500)}
              className=" text-white text-lg hover:text-secondary"
            >
              Service
            </button>
          </li>
          <li>
            <button
              onClick={() => scroll(3100)}
              className=" text-white text-lg hover:text-secondary"
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => scroll(1200)}
              className="text-white text-lg hover:text-secondary"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scroll(3800)}
              className=" text-white text-lg hover:text-secondary"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
