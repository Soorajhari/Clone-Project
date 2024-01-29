import React, { useState } from "react";
import Notification from "../../assets/Vector (4).png";
import Icon from "../../assets/WhatsApp Image 2023-12-21 at 1.33.12 AM.jpeg";
import Excel from "../../assets/Microsoft_Office_Excel_(2019–present) 1.png";
import Uploads from "../../assets/Icon.png";
import Subtract from "../../assets/Subtract (3).png";
import Ticket from "../../assets/Ticket.png";
import Spin from "./Spin";


const Upload = ({ sideBar, setSideBar, setUpload, uploaded }) => {
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(file);

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setUpload(true);
    }, 2000);
  };

  const data = [
    [Ticket, "Dashboard"],
    [Ticket, "Upload"],
    [Ticket, "Invoice"],
    [Ticket, "Calendar"],
    [Ticket, "Calendar"],
    [Ticket, "Notifications"],
    [Ticket, "Setting"],
  ];
  return (
    <div className={`bg-[#ffff] w-full  relative  `}>
      <div className="flex gap-x-2 justify-between mt-8 mx-2  md:hidden">
        <div className="flex gap-x-3">
          <ion-icon
            class="text-2xl"
            name="menu-outline"
            onClick={() => setSideBar(true)}
          ></ion-icon>
          <img className="w-25px] h-[25px]" src={Subtract} alt="" />
          <p className="font-semibold text-xl">Base</p>
        </div>

        <div className="flex gap-x-4">
          <img src={Notification} className="object-contain" alt="" />
          <img
            src={Icon}
            className="w-[25px] h-[25px] rounded-full"
            alt="icon-image"
          />
        </div>
      </div>

      <div className="flex justify-between mx-4 p-3 mt-9">
        <p className="font-bold text-lg md:text-2xl">Upload CSV</p>

        <div className="hidden md:flex gap-x-3">
          <img src={Notification} className="object-contain" alt="" />
          <img
            src={Icon}
            className="w-[30px] h-[30px] rounded-full"
            alt="icon-image"
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-[310px] md:w-[510px] h-[320px] shadow-xl">
          <div className="w-[280px] md:w-[480px] bg-[#ffff] h-[260px] p-3 mx-auto text-center border border-gray-200">
            <div className="flex flex-col items-center justify-center mt-16">
              <img src={Excel} className="mx-auto w-[30px] h-[30px]" alt="" />
              <div className="mt-5">
                {file ? (
                  <>
                    <p>{file.name}</p>
                    <p
                      className="text-red-500 text-lg cursor-pointer"
                      onClick={() => setFile(null)}
                    >
                      Remove
                    </p>
                  </>
                ) : (
                  <label className="cursor-pointer text-sm md:text-lg text-gray-300">
                    drop your excel sheet here or
                    <span className="text-blue-500 underline">
                      {" "}
                      browse here
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      accept=".xls, .xlsx"
                      onChange={(e) => setFile(e.target.files[0])}
                      required
                    />
                  </label>
                )}
              </div>
            </div>
          </div>
          <div className="mt-2 flex">
            <button
              className={`bg-blue-500 ${
                (!file || uploaded) && "cursor-not-allowed bg-blue-200"
              } text-white font-medium text-lg mx-auto rounded w-[280px] md:w-[480px] flex justify-center items-center h-[40px]`}
              onClick={(e) => handleClick(e)}
              disabled={!file || uploaded}
            >
              {loading ? "" : <img src={Uploads} alt="" className="" />}
              {loading ? <Spin /> : "Upload"}
            </button>
          </div>
        </div>
      </div>

      {sideBar && (
        <div className="p-3 mt-10 ml-10  bg-[#ffff] shadow-xl w-full h-screen overflow-hidden absolute -top-16 -left-12">
          <div className="flex justify-between gap-x-2 mt-4">
            <div className="flex gap-x-2 ">
              <img className="w-[30px] h-[30px]" src={Subtract} alt="icon" />
              <p className="font-semibold text-2xl">Base</p>
            </div>

            <ion-icon
              class="text-2xl mt-1"
              name="close-outline"
              onClick={() => setSideBar(false)}
            ></ion-icon>
          </div>
          <div>
            <div className="space-y-8 mt-10">
              {data.map((item, index) => (
                <div key={index} className="flex gap-x-5">
                  <img src={item[0]} alt="" />
                  <p className="text-lg font-medium text-gray-400">{item[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Upload;
