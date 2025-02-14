import axios from "axios";
import React, { useState } from "react";

const ChangeCourse = () => {
  const [newName, setName] = useState("");
  const [newDescription, setDesc] = useState("");
  const [newAmount, setAmt] = useState("");
  const [newDuration, setDuration] = useState("");
  const [cID, setCID] = useState("");
  const handleChange = async () => {
    const res = await axios.post("http://localhost:4007/changecourse", {
      newName,
      newDescription,
      newAmount,
      newDuration,
      cID,
    });
    console.log(res.data);
    setEmail("");
    setPass("");
    setNewPass("");
  };
  return (
    <div>
      <div>
        <div className=" flex justify-center pt-6">
          <input
            type="text"
            placeholder="enter course id"
            className="outline-none py-3 w-[300px] focus:border-[#979494] bg-[#404040] border-[#5a5959] border rounded-3xl text-white px-3"
            value={cID}
            onChange={(e) => setCID(e.target.value)}
          />
        </div>
        <div
          className="text-[40px] font-bold text-white
    flex justify-center pt-6"
        >
          Modify course!
        </div>
        <div>
          <div className="flex justify-center pt-6">
            <div>
              <div className="pb-4">
                <input
                  type="text"
                  placeholder="enter name"
                  className="outline-none py-3 w-[300px] focus:border-[#747171] border-[#404040] border rounded-3xl text-white px-3"
                  value={newName}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="pb-4">
                <input
                  type="text"
                  placeholder="enter description"
                  className="outline-none py-3 w-[300px] focus:border-[#747171] border-[#404040] border rounded-3xl text-white px-3 h-[150px]"
                  value={newDescription}
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
                    value={newAmount}
                    onChange={(e) => setAmt(e.target.value)}
                  />
                </div>
                <div>
                  {" "}
                  <input
                    type="text"
                    placeholder="enter duration of the course"
                    className="outline-none py-3 w-[130px] focus:border-[#747171] border-[#404040] border rounded-3xl text-white px-3"
                    value={newDuration}
                    onChange={(e) => setDuration(e.target.value)}
                  />
                </div>
              </div>

              <button
                className=" py-3 w-[300px] text-[20px] font-bold rounded-[50px] border border-[#ffaa0bb7] text-[#ffaa0bb7] hover:text-white  hover:bg-linear-to-r/srgb hover:from-[#FFAA0B] hover:to-[#F85739]"
                onClick={handleChange}
              >
                Submit Change
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeCourse;
