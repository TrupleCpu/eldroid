"use client";
import React, { useEffect, useState } from "react";
import { FaLock } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Signup = () => {
  const [users, setUsers] = useState<[]>([]);

  useEffect(() => {
    const fetchUsers = async() => {
        try {
           const res = await fetch('/api/user');

           const data = await res.json();

           console.log(data)
        } catch(error){
          console.log(error)
        }
    }

    fetchUsers()
  }, [])

  return (
    <>
    <p>No User Found</p>
    </>
  );
};

export default Signup;
