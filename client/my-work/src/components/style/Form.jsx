import React from "react";
import Subtract from "../../assets/Subtract.png";
import Google from "../../assets/google-icon 1.png";
import Apple from "../../assets/apple 1.png";
import Git from "../../assets/Vector (2).png";
import Twitter from "../../assets/Vector (3).png";
import Links from "../../assets/carbon_logo-linkedin (1).png";
import Discord from "../../assets/carbon_logo-discord (1).png";
import { Link } from "react-router-dom";

import "./form.css";
const img = [Git, Twitter, Links, Discord];
const Form = () => {
  return (
    <div className=" block lg:flex  gap-x-28">
      <div class="hidden lg:flex">
        <div class="2xl:w-[850px] xl:w-[600px] lg:w-[520px] h-screen overflow-hidden relative">
          <div class="trapezoid">
            <div className="ml-10 mt-10">
              <img
                className="2xl:w-[50px] w-[40px] 2xl:h-[50px] h-[40px] object-cover"
                src={Subtract}
                alt="img"
              />
            </div>

            <div class="p-3 flex flex-col items-center justify-center h-full">
              <div>
                <p class="text-white font-semibold 2xl:text-[60px] text-[50px]">
                  BASE
                </p>
              </div>

              <div className="flex gap-x-4 mt-96 ml-32">
                {img.map((item) => (
                  <img
                    className="w-[25px] h-[25px] text-white  "
                    src={item}
                    alt="social-media-icons"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#605BFF] block md:hidden">
        <div className="flex items-center w-full h-[70px] gap-x-3 p-3">
          <img src={Subtract} alt="img" />
          <p className="text-white font-semibold text-lg">Base</p>
        </div>
      </div>

      <div className="  lg:flex items-center justify-center min-h-screen ">
        <div className="bg-[#ffff] lg:w-[380px] xl:w-[450px]  lg:h-[600px]">
          <div className="ml-5 mt-5 ">
            <h2 className="font-bold text-3xl">Sign In</h2>
            <p className="text-sm md:text-base mt-2">Sign in to your account</p>
          </div>

          <div className="flex gap-x-2 md:gap-x-2.5 justify-center mt-8">
            <div className="flex bg-[#fff] shadow-lg gap-x-2 rounded-lg h-[25px] md:h-[40px] items-center justify-center p-2">
              <img
                src={Google}
                alt="google-image"
                className="w-[15px] md:w-[20px] h-[15px] md:h-[20px] object-cover"
              />
              <p className="text-[10px] md:text-base text-gray-500">
                Sign In with Google
              </p>
            </div>
            <div className="flex bg-[#fff] shadow-lg gap-x-2 rounded-lg h-[25px] md:h-[40px]  items-center justify-center p-2">
              <img
                src={Apple}
                alt="google-image"
                className="w-[15px] md:w-[20px] h-[15px] md:h-[20px] object-cover"
              />
              <p className="text-[10px] md:text-base text-gray-500">
                Sign In with Apple
              </p>
            </div>
          </div>

          <div className="bg-[#fff] mt-8 w-full h-auto p-3 shadow-2xl">
            <div className=" ">
              <h4 className="ml-[10px] text-base md:text-xl">Email address</h4>
              <div className="mt-3 flex">
                <input
                  className="flex-grow bg-[#F5F5F5] h-[35px] md:h-[50px] p-2 rounded-lg"
                  type="text"
                  placeholder="email"
                />
              </div>
            </div>

            <div className="mt-5">
              <h4 className="ml-[10px] text-base md:text-xl">Password</h4>
              <div className="mt-3 flex">
                <input
                  className="bg-[#F5F5F5] h-[35px]  md:h-[50px] border-none flex-grow  p-2 rounded-lg"
                  type="password"
                  placeholder="password"
                />
              </div>
            </div>
            <p className="text-[#605BFF] mt-4 ml-2">Forgot password?</p>
            <div className="flex justify-center mt-4">
              <Link to="/home">
                <button className="bg-[#605BFF] w-[180px] md:w-[380px] rounded-md h-[30px] md:h-[40px] text-white font-medium">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
          <div>
            <div className="mt-8 text-center">
              <p className="text-gray-500 text-[15px]">
                Don't have an account?
              </p>
              <p className="mt-2 text-blue-500 text-[14px]">Register here</p>
            </div>

            <div className="flex gap-x-4 justify-center mt-7  lg:hidden">
              {img.map((item) => (
                <img
                  className="w-[25px] h-[25px]"
                  src={item}
                  alt="social-media-icons"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
