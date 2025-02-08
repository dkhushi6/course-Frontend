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

  return (
    <div>
      {courses.map((course, index) => {
        return (
          <div
            className="flex-wrap  justify-between flex m-5 gap-y-5"
            key={course._id}
          >
            <div>
              <div className="pt-3 text-[20px] text-[#ccd2d8]">
                {course.name}
              </div>
              <div className="flex items-start py-3">
                <div className="text-[20px]">$</div>
                <div className="text-[35px] font-semibold ">
                  {course.amount}
                </div>
              </div>
              <div className="py-3">
                <button className="text-[20px] bg-[#424141] px-3 py-1 rounded-3xl  ">
                  {course.duration}
                </button>
              </div>

              <div className="text-[14px] italic flex-wrap text-[#aaaeb3]">
                {course.description}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllCourse;
