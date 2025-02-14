import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex  justify-between p-5 border-[#404040] h-[64px] w-full border items-center gap-5 ">
      <div className="text-[25px] font-semibold  flex hover:text-[#ffaa0bb7] text-white ">
        CreatiVerse
      </div>

      <div className="flex gap-6 text-[16px] font-semibold   pl-3 ">
        <div className="hover:underline">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? " text-[#ffaa0bb7] underline " : "  text-white "
            }
          >
            Home
          </NavLink>
        </div>
        <div className="hover:underline">
          <NavLink
            to="/allcourse"
            className={({ isActive }) =>
              isActive ? " text-[#ffaa0bb7] underline " : "  text-white "
            }
          >
            Explore
          </NavLink>
        </div>
        <div className="hover:underline">
          <NavLink
            to="/addcourse"
            className={({ isActive }) =>
              isActive ? " text-[#ffaa0bb7] underline " : "  text-white "
            }
          >
            Add Courses
          </NavLink>
        </div>
        <div className="hover:underline">
          <NavLink
            to="/purchase"
            className={({ isActive }) =>
              isActive ? " text-[#ffaa0bb7] underline " : "  text-white "
            }
          >
            Purchase
          </NavLink>
        </div>
        <div className="hover:underline">
          <NavLink
            to="/userpurchases"
            className={({ isActive }) =>
              isActive ? " text-[#ffaa0bb7] underline " : "  text-white "
            }
          >
            User Purchases
          </NavLink>
        </div>
      </div>

      <div className="flex gap-2">
        {" "}
        <div>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-linear-to-r/srgb from-[#FFAA0B] to-[#F85739]  rounded-3xl px-4 py-2 "
                : " text-[#ffaa0bb7] border-[#ffaa0bb7] border rounded-3xl px-4 py-2 "
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
                ? "text-white bg-linear-to-r/srgb from-[#FFAA0B] to-[#F85739]  rounded-3xl px-4 py-2 "
                : " text-[#ffaa0bb7] border-[#ffaa0bb7] border rounded-3xl px-4 py-2 "
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
