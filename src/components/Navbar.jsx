import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex  justify-between p-5 border-[#404040] h-[64px] w-full border items-center gap-5 ">
      <div className="text-[30px] font-bold italic flex hover:text-[#8364D2] ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-linear-to-r/srgb from-[#8364D2] to-[#ab90ee]  rounded-3xl px-4 py-2 "
              : " text-white border-[#4d4c4c] border rounded-3xl px-4 py-2 "
          }
        >
          Courses
        </NavLink>
      </div>
      <div className="text-[16px] font-bold   pl-3 flex gap-6 ">
        <div>
          <NavLink
            to="/addcourse"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-linear-to-r/srgb from-[#8364D2] to-[#ab90ee]  rounded-3xl px-4 py-3 "
                : " text-white border-[#4d4c4c] border rounded-3xl px-4 py-3 "
            }
          >
            Add Courses
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/purchase"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-linear-to-r/srgb from-[#8364D2] to-[#ab90ee]  rounded-3xl px-4 py-3 "
                : " text-white border-[#4d4c4c] border rounded-3xl px-4 py-3 "
            }
          >
            Purchase
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-linear-to-r/srgb from-[#8364D2] to-[#ab90ee]  rounded-3xl px-4 py-3 "
                : " text-white border-[#4d4c4c] border rounded-3xl px-4 py-3 "
            }
          >
            SignUp
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-linear-to-r/srgb from-[#8364D2] to-[#ab90ee]  rounded-3xl px-4 py-3 "
                : " text-white  border-[#4d4c4c] border rounded-3xl px-4 py-3 "
            }
          >
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
