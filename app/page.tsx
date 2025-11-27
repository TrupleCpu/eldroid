"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

export default function Home() {
  const [tab, setTab] = useState<"signin" | "signup">("signup");

  useEffect(() => {
    fetch("/api/register")
      .then((res) => res.json())
      .then((data) => console.log(data.users));
  }, []);

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
              left: tab === "signin" ? "1%" : "49%",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />

          <button
            onClick={() => setTab("signin")}
            className="z-10 flex-1 py-2 text-sm sm:text-base md:text-base lg:text-base"
          >
            Sign in
          </button>

          <button
            onClick={() => setTab("signup")}
            className="z-10 flex-1 py-2 text-sm sm:text-base md:text-base lg:text-base"
          >
            Sign up
          </button>
        </div>

        <motion.div
          key={tab}
          layout
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          {tab === "signin" ? <Signin /> : <Signup />}
        </motion.div>
      </motion.div>
    </div>
  );
}
