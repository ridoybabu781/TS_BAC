"use client";

import Loading from "@/app/loading";
import { userStore } from "@/store/user.store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [pageLoading, setPageLoading] = useState(true);

  const { user, message, login } = userStore();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    await login(formData);
    setLoading(false);
  };
  const navigate = useRouter();

  {
    user ? navigate.push("/") : null;
  }

  useEffect(() => {
    setPageLoading(false);
  }, []);

  if (pageLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col md:flex-row my-16 gap-12 mx-auto  items-center justify-center">
      <div className="m-auto  md:1/2">
        <img
          src="/images/loginPage.png"
          alt="Login page image"
          className="w-2/3 md:w-full m-auto"
        />
      </div>
      <div className="flex flex-col gap-12 m-auto md:pr-4 w-11/12 md:w-1/2 ">
        <div>
          <h1 className="text-4xl font-bold">Log in to Elcon </h1>
          <p className="text-xl font-normal mt-6">Enter your details below</p>
        </div>
        <form onSubmit={(e) => handleLogin(e)}>
          <fieldset className="flex flex-col gap-10">
            <input
              className="p-2 border-b border-gray-300"
              placeholder="Email Address "
              value={formData.email}
              name="email"
              onChange={handleChange}
            />
            <input
              className="p-2 border-b border-gray-300"
              placeholder="Password "
              type="passoword"
              value={formData.password}
              name="password"
              onChange={handleChange}
            />
          </fieldset>

          {message && <div className="text-red-500 mt-4">{message}</div>}

          <div className=" flex items-center justify-between  mt-10">
            <button
              type="submit"
              className="py-3 px-4 text-lg text-white text-center bg-rose-600  rounded-md"
            >
              {loading ? "Logging in..." : "Log in"}
            </button>
            <Link href={"/auth/forget-password"}> Forget password? </Link>
          </div>

          <p className="mt-8 text-center">
            Don't have an account?{" "}
            <Link
              className="text-blue-500 text-center hover:text-underline"
              href={"/auth/signup"}
            >
              {" "}
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
