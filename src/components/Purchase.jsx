import React, { useState } from "react";

import axios from "axios";

const Purchase = () => {
  const [userId, setUserId] = useState("");
  const [courseId, setCourseId] = useState("");
  const [quantity, setQuantity] = useState("");

  const handlePurchase = async () => {
    const res = await axios.post(
      "https://course-backend-fuja.onrender.com/purchase",
      {
        userID: userId,
        courseID: courseId,
        quantity,
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
        Purchase a course!
      </div>
      <div>
        <div className="flex justify-center pt-6">
          <div>
            <div className="pb-4">
              <input
                type="text"
                placeholder="enter userID"
                className="outline-none py-3 w-[300px] focus:border-[#747171] border-[#404040] border rounded-3xl text-white px-3"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </div>
            <div className="pb-4">
              <input
                type="text"
                placeholder="enter courseID"
                className="outline-none py-3 w-[300px] focus:border-[#747171] border-[#404040] border rounded-3xl text-white px-3"
                value={courseId}
                onChange={(e) => setCourseId(e.target.value)}
              />
            </div>
            <div className="pb-4">
              <input
                type="text"
                placeholder="enter quantity"
                className="outline-none py-3 w-[300px] focus:border-[#747171] border-[#404040] border rounded-3xl text-white px-3"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>

            <button
              className=" py-3 w-[300px] text-[20px] font-bold rounded-[50px] border border-[#ffaa0bb7] text-[#ffaa0bb7] hover:text-white  hover:bg-linear-to-r/srgb hover:from-[#FFAA0B] hover:to-[#F85739]"
              onClick={handlePurchase}
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
