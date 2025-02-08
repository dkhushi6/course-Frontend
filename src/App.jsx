import { Route, Routes } from "react-router-dom";
import AllCourse from "./components/AllCourse";
import Course from "./components/course";
import Login from "./components/Login";
import Purchase from "./components/Purchase";
import Signup from "./components/Signup";
import Layout from "./Layout";

function App() {
  return (
    <div className="bg-[#292929] h-screen">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/addcourse" element={<Course />} />
          <Route path="/" element={<AllCourse />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
