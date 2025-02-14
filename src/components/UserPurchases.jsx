import React, { useState } from "react";
import axios from "axios";

const UserPurchases = () => {
  const [uid, setUid] = useState("");
  const [info, setInfo] = useState([]);
  const handleUserPurchases = async () => {
    try {
      const uID = localStorage.getItem("x");
      console.log(uID);
      setUid(uID);
      const res = await axios.post("http://localhost:4007/userpurchases", {
        idUser: uid,
      });
      console.log(res.data);
      setInfo(res.data.purchase);
    } catch {
      console.error("error fetching data");
    }
  };
  UserPurchases();
  return (
    <div className="text-white">
      <div>
        {info.map((item, index) => {
          <div key={purchase._id}></div>;
        })}
      </div>
    </div>
  );
};

export default UserPurchases;
