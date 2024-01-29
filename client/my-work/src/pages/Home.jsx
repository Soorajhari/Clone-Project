import React, { useState } from "react";
import Sidebar from "../components/style/Sidebar";
import Upload from "../components/style/Upload";
import Uploaded from "../components/style/Uploaded";

const Home = () => {
  const [sideBar, setSideBar] = useState(false);
  const [uploaded,setUpload]=useState(false)
  return (
    <div className="">
      <div className="flex">
        <Sidebar />
        <div className={`w-full ${sideBar && 'overflow-y-hidden'}`}>
          <Upload sideBar={sideBar} setSideBar={setSideBar} setUpload={setUpload} uploaded={uploaded} />
           <div className={`mr-10 ${sideBar && 'overflow-y-hidden'} `}>
            {uploaded && <Uploaded />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
