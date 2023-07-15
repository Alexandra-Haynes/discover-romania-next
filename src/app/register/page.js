"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const [username, setUsermane] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username === "" || email === "" || password === "") {
      toast.error("Fill all fields");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/register", {
        headers: {
          "Content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ username, email, password }),
      });

      console.log(await res.json());
      if (res.ok) {
        toast.success("Successfully registered");
        setTimeout(() => {
          signIn();
        }, 1500);
      } else {
        toast.error("Error occured while registering");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="bg-gray-400 m-auto p-8 flex flex-col items-center justify-center">
      <h1>Register a new account</h1>
    </section>
  );
};

export default Register;
