import { Route, Routes } from "react-router-dom";
import AllCourse from "./components/AllCourse";
import Course from "./components/Course";
import Login from "./components/Login";
import Purchase from "./components/Purchase";
import Signup from "./components/Signup";
import Layout from "./Layout";
import Home from "./components/Home";
import UserPurchases from "./components/UserPurchases";
import ChangePass from "./components/ChangePass";
import ChangeEmail from "./components/ChangeEmail";
import ChangeCourse from "./components/ChangeCourse";

function App() {
  return (
    <div className="bg-gradient-to-br from-[#000000] via-[#111111] to-[#222222] h-screen">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/changecourse" element={<ChangeCourse />} />
          <Route path="/changepass" element={<ChangePass />} />
          <Route path="/changeEmail" element={<ChangeEmail />} />
          <Route path="/addcourse" element={<Course />} />
          <Route path="/allcourse" element={<AllCourse />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/userpurchases" element={<UserPurchases />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
