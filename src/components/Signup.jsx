import React, { useState, useEffect } from "react";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPass] = useState("");

  const handleSignIn = async () => {
    try {
      const res = await axios.post(
        "https://course-backend-fuja.onrender.com/signup",
        {
          name,
          email,

          password,
        }
      );

      console.log(res.data);
      const x = res.data.user._id;
      console.log(x);
      localStorage.setItem("x");
      setName("");
      setPass("");
      setEmail("");
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div>
      <div
        className="text-[40px] font-bold text-white
    flex justify-center pt-7"
      >
        Create account!
      </div>
      <div className="flex justify-center pt-6">
        <div>
          <div className="pb-4">
            <input
              type="text"
              placeholder="enter name"
              className="outline-none py-3 w-[300px] focus:border-[#747171] border-[#404040] border rounded-3xl text-white px-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
            className="  py-3 w-[300px] text-[20px] font-bold rounded-[50px] border border-[#ffaa0bb7] text-[#ffaa0bb7] hover:text-white  hover:bg-linear-to-r/srgb hover:from-[#FFAA0B] hover:to-[#F85739] "
            onClick={handleSignIn}
          >
            Sign-Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
