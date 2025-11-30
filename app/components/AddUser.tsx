"use client";
import { FaLock } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FormEvent, useState } from "react";
import { Bounce, toast } from "react-toastify";

const Signin = () => {
  const [idNo, setIdNo] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [course, setCourse] = useState<string>("");
  const [level, setLevel] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const addUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("idNo", idNo);
    formData.append("lastName", lastName);
    formData.append("firstName", firstName);
    formData.append("course", course);
    formData.append("level", level);

    try {
    //   const res = await fetch("/api/user", {
    //     method: "POST",
    //     body: formData,
    //   });

    //   const data = await res.json();
    //   console.log(data);
    
      toast.success('User Added!', {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    });
  
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form action="" onSubmit={addUser} className="space-y-5 w-full">
      <div className="relative flex flex-col gap-2">
        <label htmlFor="" className="text-sm font-semibold text-gray-700">
          ID No <span className="text-blue-400"> *</span>
        </label>
        <input
          type="text"
          name=""
          value={idNo}
          onChange={(e) => setIdNo(e.target.value)}
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
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
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
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter your last name"
          className="outline-none border border-gray-400 rounded-sm py-2 px-4 pl-10"
        />
        <FaUser className="absolute bottom-3 left-2 text-xl text-gray-500" />
      </div>

      <div className="relative flex flex-col gap-2">
        <label htmlFor="" className="text-sm font-semibold text-gray-700">
          Course <span className="text-blue-400"> *</span>
        </label>
        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="border border-gray-400 py-2 px-4 rounded-sm outline-none"
        >
          <option value="" disabled hidden className="text-red-500">
            Select a course
          </option>
          <option value="BSCS">BSCS</option>
          <option value="BSIT">BSIT</option>
          <option value="BSA">BSA</option>
          <option value="BSCPE">BSCPE</option>
          <option value="BSCE">BSCE</option>
        </select>
      </div>
      <div className="relative flex flex-col gap-2">
        <label htmlFor="" className="text-sm font-semibold text-gray-700">
          Level <span className="text-blue-400"> *</span>
        </label>
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="border border-gray-400 py-2 px-4 rounded-sm outline-none"
        >
          <option value="" disabled hidden>
            Select a level
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <div className="w-full  flex justify-center">
        <button className="bg-[#1DA299] w-full py-2 text-white rounded-md cursor-pointer hover:bg-[#21b6ac] transition-all">
          Save
        </button>
      </div>
    </form>
  );
};

export default Signin;
