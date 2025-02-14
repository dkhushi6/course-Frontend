import axios from "axios";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const handleLogIn = async () => {
    try {
      const res = await axios.post(
        "https://course-backend-fuja.onrender.com/login",
        {
          email,
          password,
        }
      );
      console.log(res.data);
      setEmail("");
      setPass("");
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };
  return (
    <div>
      <div
        className="text-[40px] font-bold text-white
    flex justify-center pt-6"
      >
        Log-In to your account
      </div>
      <div className="flex justify-center pt-6">
        <div>
          <div className="pb-4">
            <input
              type="text"
              placeholder="enter email"
              className="outline-none py-3 w-[300px] focus:border-[#747171] border-[#404040] border rounded-3xl text-white px-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="pb-4">
            <input
              type="text"
              placeholder="enter password"
              className="outline-none py-3 w-[300px] focus:border-[#747171] border-[#404040] border rounded-3xl text-white px-3"
              value={password}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>

          <button
            className=" py-3 w-[300px] text-[20px] font-bold rounded-[50px] border border-[#ffaa0bb7] text-[#ffaa0bb7] hover:text-white  hover:bg-linear-to-r/srgb hover:from-[#FFAA0B] hover:to-[#F85739]"
            onClick={handleLogIn}
          >
            Log-In
          </button>

          <div className=" flex justify-center pt-3 font-semibold">
            <NavLink
              to="/changepass"
              className="text-white hover:text-[#ffaa0bb7] hover:underline"
            >
              Change password?
            </NavLink>
          </div>
          <div className=" flex justify-center pt-3 font-semibold">
            <NavLink
              to="/changeEmail"
              className="text-white hover:text-[#ffaa0bb7] hover:underline"
            >
              Change Email?
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
