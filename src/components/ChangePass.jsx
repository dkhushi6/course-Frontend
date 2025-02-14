import axios from "axios";
import React, { useState } from "react";

const ChangePass = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [newPassword, setNewPass] = useState("");
  const handleChange = async () => {
    const res = await axios.post("http://localhost:4007/changepass", {
      email,
      password,
      newPassword,
    });
    console.log(res.data);
    setEmail("");
    setPass("");
    setNewPass("");
  };
  return (
    <div>
      <div>
        <div
          className="text-[40px] font-bold text-white
    flex justify-center pt-6"
        >
          Change Password!!
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
            <div className="pb-4">
              <input
                type="text"
                placeholder="enter new password"
                className="outline-none py-3 w-[300px] focus:border-[#979494] bg-[#404040] border-[#5a5959] border rounded-3xl text-white px-3"
                value={newPassword}
                onChange={(e) => setNewPass(e.target.value)}
              />
            </div>

            <button
              className=" py-3 w-[300px] text-[20px] font-bold rounded-[50px] border border-[#ffaa0bb7] text-[#ffaa0bb7] hover:text-white  hover:bg-linear-to-r/srgb hover:from-[#FFAA0B] hover:to-[#F85739]"
              onClick={handleChange}
            >
              Change
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePass;
