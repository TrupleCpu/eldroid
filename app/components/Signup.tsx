"use client";
import React from "react";
import { FaLock } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Signup = () => {
  return (
    <form action="" className="space-y-5 w-full">
      <div className="relative flex flex-col gap-2">
        <label htmlFor="" className="text-sm font-semibold text-gray-700">
          ID No <span className="text-blue-400"> *</span>
        </label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter your id number"
          className="outline-none border border-gray-400 rounded-sm py-2 px-4 pl-10"
        />
        <FaAddressCard className="absolute bottom-3 left-2 text-xl text-gray-500" />
      </div>
      <div className="relative flex flex-col gap-2">
        <label htmlFor="" className="text-sm font-semibold text-gray-700">
          First Name <span className="text-blue-400"> *</span>
        </label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter your first name"
          className="outline-none border border-gray-400 rounded-sm py-2 px-4 pl-10"
        />
        <FaUser className="absolute bottom-3 left-2 text-xl text-gray-500" />
      </div>
      <div className="relative flex flex-col gap-2">
        <label htmlFor="" className="text-sm font-semibold text-gray-700">
          Last Name <span className="text-blue-400"> *</span>
        </label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter your last name"
          className="outline-none border border-gray-400 rounded-sm py-2 px-4 pl-10"
        />
        <FaUser className="absolute bottom-3 left-2 text-xl text-gray-500" />
      </div>

      <div className="relative flex flex-col gap-2">
        <label htmlFor="" className="text-sm font-semibold text-gray-700">
          Course <span className="text-blue-400"> *</span>
        </label>
        <select className="border border-gray-400 py-2 px-4 rounded-sm outline-none">
          <option value="">BSCS</option>
          <option value="">BSIT</option>
          <option value="">BSA</option>
          <option value="">BSCPE</option>
          <option value="">BSCE</option>
        </select>
      </div>
      <div className="relative flex flex-col gap-2">
        <label htmlFor="" className="text-sm font-semibold text-gray-700">
          Level <span className="text-blue-400"> *</span>
        </label>
        <select className="border border-gray-400 py-2 px-4 rounded-sm outline-none">
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
        </select>
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
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default Signup;
