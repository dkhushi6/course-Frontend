import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const handleLogIn = async () => {
    try {
      const res = await axios.post("http://localhost:4007/login", {
        email,
        password,
      });
      console.log(res.data);
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
        Create account!
      </div>
      <div className="flex justify-center pt-6">
        <div>
          <div className="pb-4">
            <input
              type="text"
              placeholder="enter email"
              className="outline-none py-3 w-[300px] focus:border-[#747171] border-[#404040] border rounded-xl text-white px-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="pb-4">
            <input
              type="text"
              placeholder="enter password"
              className="outline-none py-3 w-[300px] focus:border-[#747171] border-[#404040] border rounded-xl text-white px-3"
              value={password}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>

          <button
            className="text-white bg-linear-to-r/srgb from-[#8364D2] to-[#ab90ee]  rounded-xl py-3 w-[300px] text-[20px] font-bold focus:bg-linear-to-r/srgb focus:from-[#ab90ee] focus:to-[#8364D2]"
            onClick={handleLogIn}
          >
            Log-In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
