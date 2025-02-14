import React from "react";
import img from "../assets/boy.png";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center py-10 pl-15 ">
      <div className="text-white  ">
        <div className="font-semibold text-[60px]">
          Your Knowledge, Your Way –
        </div>
        <div className="italic text-[40px] text-[#ffaa0bb7] ">
          {" "}
          Explore, Create, and Achieve!
        </div>
        <div className="text-[17px] text-[#b8b6b3] flex flex-wrap w-[600px]">
          Unlock the power of knowledge with [Your Website Name], the ultimate
          platform for course creation and learning. Whether you're an educator
          looking to create and sell courses or a student eager to learn new
          skills, we’ve got you covered.
        </div>
        <div className="pt-10 ">
          <NavLink
            to="/signup"
            className="px-[50px] py-1 rounded-[50px] border border-[#ffaa0bb7] text-[#ffaa0bb7] hover:text-white text-[30px] hover:bg-linear-to-r/srgb hover:from-[#FFAA0B] hover:to-[#F85739] "
          >
            Get Started
          </NavLink>
        </div>
      </div>
      <div>
        <img src={img} alt="boi" className="h-[550px] w-[1100px] opacity-60" />
      </div>
    </div>
  );
};

export default Home;
