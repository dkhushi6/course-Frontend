import React, { useState } from "react";

import axios from "axios";

const Purchase = () => {
  const [userId, setUserId] = useState("");
  const [courseId, setCourseId] = useState("");
  const [quantity, setQuantity] = useState("");

  const handlePurchase = async () => {
    const res = await axios.post("http://localhost:4007/purchase", {
      userID: userId,
      courseID: courseId,
      quantity,
    });
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
                className="outline-none py-3 w-[300px] focus:border-[#747171] border-[#404040] border rounded-xl text-white px-3"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </div>
            <div className="pb-4">
              <input
                type="text"
                placeholder="enter courseID"
                className="outline-none py-3 w-[300px] focus:border-[#747171] border-[#404040] border rounded-xl text-white px-3"
                value={courseId}
                onChange={(e) => setCourseId(e.target.value)}
              />
            </div>
            <div className="pb-4">
              <input
                type="text"
                placeholder="enter quantity"
                className="outline-none py-3 w-[300px] focus:border-[#747171] border-[#404040] border rounded-xl text-white px-3"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>

            <button
              className="text-white bg-linear-to-r/srgb from-[#8364D2] to-[#ab90ee]  rounded-xl py-3 w-[300px] text-[20px] font-bold focus:bg-linear-to-r/srgb focus:from-[#ab90ee] focus:to-[#8364D2]"
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
