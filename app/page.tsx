"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify"
import AddUser from "./components/AddUser";
import AllUser from "./components/AllUser";

export default function Home() {
  const [tab, setTab] = useState<"Add User" | "All User">("Add User");

 

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <motion.div
        className="border-2 border-gray-200 p-5 h-full lg:h-auto  space-y-10 w-full  lg:w-[30%] rounded-md overflow-hidden "
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <div className="w-full relative flex border border-gray-200 p-2 rounded-md">
          <motion.div
            className="absolute top-1 bottom-1 rounded-md bg-gray-200"
            style={{ width: "50%" }}
            animate={{
              left: tab === "Add User" ? "1%" : "49%",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />

          <button
            onClick={() => setTab("Add User")}
            className="z-10 flex-1 py-2 text-sm sm:text-base md:text-base lg:text-base"
          >
           Add User
          </button>

          <button
            onClick={() => setTab("All User")}
            className="z-10 flex-1 py-2 text-sm sm:text-base md:text-base lg:text-base"
          >
            All User
          </button>
        </div>

        <motion.div
          key={tab}
          layout
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          {tab === "Add User" ? <AddUser /> : <AllUser />}
        </motion.div>
      </motion.div>
      <ToastContainer />
    </div>
  );
}
