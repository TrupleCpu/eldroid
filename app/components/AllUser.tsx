"use client";

import React, { useEffect, useState } from "react";
import { FaAddressCard, FaUser } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

type User = {
  idno: string;
  firstname: string;
  lastname: string;
  course: string;
  level: string;
  email: string;
  age: number;
};

const Signup = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [menuOpenId, setMenuOpenId] = useState<string | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [idNo, setIdNo] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [course, setCourse] = useState<string>("");
  const [level, setLevel] = useState<string>("");
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/user");
        const data = await res.json();

        console.log(data)
        setUsers(data.users);
      } catch (error) {
        console.log("Fetch error:", error);
      }
    };

    fetchUsers();
  }, []);

  // Handle open update/delete
  const handleUpdate = (user: User) => {
    setSelectedUser(user);
    setShowUpdateModal(true);
  };

  const handleDelete = (user: User) => {
    setSelectedUser(user);
    setShowDeleteModal(true);
  };

  return (
    <>
      <div className="space-y-4">
        {users.length === 0 && (
          <div className="w-full flex flex-col  justify-center items-center py-10">
            <p className="text-lg font-semibold text-gray-600">
              No Users Found
            </p>
          </div>
        )}

        {Array.isArray(users) &&
          users.map((user) => (
            <div
              key={user.idno}
              className="relative w-full bg-white p-6 rounded-xl shadow flex flex-col lg:flex-row items-center gap-5"
            >
              <div className="bg-gray-200 p-5 rounded-full shadow-inner">
                <FaUser className="text-4xl text-gray-600" />
              </div>

              <div className=" text-sm ">
               <div className="flex gap-12">
                 <p className="font-semibold text-gray-600">Name:</p>
                <p>
                  {user.lastname}, {user.firstname}
                </p>

               </div>
               <div className="flex gap-12">
                 <p className="font-semibold text-gray-600">ID No:</p>
                <p>{user.idno}</p>
               </div>

               <div className="flex gap-10">
                 <p className="font-semibold text-gray-600">Course:</p>
                <p>{user.course}</p>

               </div>
             <div className="flex gap-5">
                 <p className="font-semibold text-gray-600">Year Level:</p>
                <p>{user.level}</p>
             </div>
              </div>

              <button
                onClick={() =>
                  setMenuOpenId(menuOpenId === user.idno ? null : user.idno)
                }
                className="p-2 hover:bg-gray-100 rounded-full transition absolute right-4 top-4"
              >
                <HiOutlineDotsVertical className="text-xl text-gray-500" />
              </button>

              <AnimatePresence>
                {menuOpenId === user.idno && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-4 top-14 bg-white shadow-lg rounded-lg p-2 w-32 z-50"
                  >
                    <button
                      onClick={() => handleUpdate(user)}
                      className="w-full px-3 py-2 text-left hover:bg-gray-100 rounded-md"
                    >
                      Update
                    </button>

                    <button
                      onClick={() => handleDelete(user)}
                      className="w-full px-3 py-2 text-left hover:bg-gray-100 rounded-md text-red-600"
                    >
                      Delete
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
      </div>

      <AnimatePresence>
        {showUpdateModal && selectedUser && (
          <motion.div
            key="updateModal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white p-6 rounded-xl shadow-xl w-96"
            >
              <h2 className="text-lg font-bold mb-3">
                Update {selectedUser.firstname}
              </h2>

              <div className="space-y-4">
                <div className="relative flex flex-col gap-2">
                  <label
                    htmlFor=""
                    className="text-sm font-semibold text-gray-700"
                  >
                    ID No <span className="text-blue-400"> *</span>
                  </label>
                  <input
                    type="text"
                    name=""
                    placeholder="Enter your id number"
                    className="outline-none border border-gray-400 rounded-sm py-2 px-4 pl-10"
                  />
                  <FaAddressCard className="absolute bottom-3 left-2 text-xl text-gray-500" />
                </div>
                <div className="relative flex flex-col gap-2">
                  <label
                    htmlFor=""
                    className="text-sm font-semibold text-gray-700"
                  >
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
                  <label
                    htmlFor=""
                    className="text-sm font-semibold text-gray-700"
                  >
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
                  <label
                    htmlFor=""
                    className="text-sm font-semibold text-gray-700"
                  >
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
                  <label
                    htmlFor=""
                    className="text-sm font-semibold text-gray-700"
                  >
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
                <div className="mt-4 flex justify-end gap-2">
                  <button
                    onClick={() => setShowUpdateModal(false)}
                    className="px-4 py-2 bg-gray-200 rounded"
                  >
                    Close
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded">
                    Save
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showDeleteModal && selectedUser && (
          <motion.div
            key="deleteModal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white p-6 rounded-xl shadow-xl w-80"
            >
              <h2 className="text-lg font-bold mb-3 text-red-600">
                Confirm Delete
              </h2>

              <p>
                Delete{" "}
                <span className="font-semibold">{selectedUser.firstname}</span>?
              </p>

              <div className="mt-4 flex justify-end gap-2">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="px-4 py-2 bg-gray-200 rounded"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-red-600 text-white rounded">
                  Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Signup;
