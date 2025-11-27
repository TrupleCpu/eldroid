"use client"
import { FaLock } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";

const Signin = () => {
  return (
    <form action="" className="space-y-5 w-full">
      <div className="relative flex flex-col gap-2">
        <label htmlFor="" className="text-sm font-semibold text-gray-700">
          ID Number <span className="text-blue-400"> *</span>
        </label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter your id number"
          className="outline-none border border-gray-400 rounded-sm py-2 px-4 pl-10"
        />
        <FaAddressCard className="absolute bottom-2.5 left-2 text-2xl text-gray-500" />
      </div>

      <div className="relative flex flex-col gap-2">
        <label htmlFor="" className="text-sm font-semibold text-gray-700">
          Password <span className="text-blue-400"> *</span>
        </label>
        <input
          type="password"
          name=""
          id=""
          placeholder="Enter your password"
          className="outline-none border border-gray-400 rounded-sm py-2 px-4 pl-10"
        />
        <FaLock className="absolute bottom-3.5 left-2 text-xl text-gray-500" />
      </div>

      <div className="w-full  flex justify-center">
        <button className="bg-[#1DA299] w-full py-2 text-white rounded-md cursor-pointer hover:bg-[#21b6ac] transition-all">
          Sign In
        </button>
      </div>
    </form>
  );
};

export default Signin;
