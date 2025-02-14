import axios from "axios";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Course = () => {
  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const [amount, setAmt] = useState("");
  const [duration, setDuration] = useState();

  const handleAdd = async () => {
    const res = await axios.post(
      "https://course-backend-fuja.onrender.com/addcourse",
      {
        name,
        description,
        amount,
        duration,
      }
    );
    console.log(res.data);
  };

  return (
    <div>
      <div
        className="text-[40px] font-bold text-white
    flex justify-center pt-6"
      >
        Create a course!
      </div>
      <div>
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
                placeholder="enter description"
                className="outline-none py-3 w-[300px] focus:border-[#747171] border-[#404040] border rounded-3xl text-white px-3 h-[150px]"
                value={description}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <div className="pb-4 gap-5 flex ">
              <div>
                {" "}
                <input
                  type="text"
                  placeholder="enter amount in $"
                  className="outline-none py-3 w-[150px] focus:border-[#747171] border-[#404040] border rounded-3xl text-white px-3"
                  value={amount}
                  onChange={(e) => setAmt(e.target.value)}
                />
              </div>
              <div>
                {" "}
                <input
                  type="text"
                  placeholder="enter duration of the course"
                  className="outline-none py-3 w-[130px] focus:border-[#747171] border-[#404040] border rounded-3xl text-white px-3"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />
              </div>
            </div>

            <button
              className=" py-3 w-[300px] text-[20px] font-bold rounded-[50px] border border-[#ffaa0bb7] text-[#ffaa0bb7] hover:text-white  hover:bg-linear-to-r/srgb hover:from-[#FFAA0B] hover:to-[#F85739]"
              onClick={handleAdd}
            >
              Submit
            </button>
            <div className=" flex justify-center pt-3 font-semibold">
              <NavLink
                to="/changecourse"
                className="text-white hover:text-[#ffaa0bb7] hover:underline"
              >
                Change course?
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
