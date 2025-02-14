import axios from "axios";
import React, { useState, useEffect } from "react";

const AllCourse = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const ViewAllCourses = async () => {
      const res = await axios.get(
        "https://course-backend-fuja.onrender.com/seecourses"
      );
      console.log(res.data);
      setCourses(res.data.allCourse);
    };
    ViewAllCourses();
  }, []);
  const handleBuy = async (id) => {
    const uid = localStorage.getItem("x");
    console.log(uid);
    console.log(id);
    const buy = await axios.post("http://localhost:4007/purchase", {
      userID: uid,
      courseID: id,
      quantity: 3,
    });
    console.log(buy);
  };

  return (
    <div className="flex justify-center gap-5 p-5">
      {courses.map((course, index) => {
        return (
          <div
            className=" border border-[#ffaa0bb7]  rounded-xl w-[200px] h-[300px] "
            key={course._id}
          >
            <div className=" flex justify-between m-5   ">
              <div>
                <div className="pt-3 text-[20px] text-[#ffaa0bb7] font-semibold flex justify-center underline ">
                  {course.name}
                </div>
                <div className="flex items-start py-3 text-amber-50">
                  <div className="text-[20px]">$</div>
                  <div className="text-[35px] font-semibold  ">
                    {course.amount}
                  </div>
                </div>
                <div className="py-3">
                  <button className="text-[16px] text-[#ccd2d87c]  ">
                    {course.duration}
                  </button>
                </div>

                <div className="text-[14px] italic flex-wrap text-[#aaaeb3]">
                  {course.description}
                </div>
                <div className="pt-3">
                  {" "}
                  <button
                    onClick={() => {
                      handleBuy(course._id);
                    }}
                    className="px-[50px] py-1 rounded-[50px] border border-[#ffaa0bb7] text-[#ffaa0bb7] hover:text-white text-[16px] hover:bg-linear-to-r/srgb hover:from-[#FFAA0B] hover:to-[#F85739] "
                  >
                    purchase
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllCourse;
