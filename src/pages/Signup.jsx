import React from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
 function Signup() {
  const navigate = useNavigate()
    function navigateHome() {
        navigate("/. ")
      }
  return (
    <div className="flex flex-wrap items-center justify-center mb-6">
      <div className="w-full p-6 m-auto bg-blue rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-blue-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-black-700 underline uppercase ">
          sign up
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-center font-semibold text-gray-800 "
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <a href="#" className="text-xs text-blue-600 hover:underline">
            Forget Password?
          </a>
          <div className="mt-6">
            <button onClick={navigateHome} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
            Signup
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <a href="#" className="font-medium text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
        <Footer/>
      </div>
      
    </div>
  );
}
export default Signup;