import React from "react";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="max-w-md  px-8 pt-6 pb-8 mb-4  bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4 ">
          Sign Up
        </h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              id="name"
              className="bg-slate-900 border border-slate-800 text-white rounded w-full py-2 px-2 mb-1 mr-4 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="bg-slate-900 border border-slate-800 text-white rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="bg-slate-900 border border-slate-800 text-white rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-gray-800 hover:bg-gray-500 text-white rounded-md focus:outline-none focus:bg-blue-600"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="flex items-center justify-between m-2">
          <p
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Already have an account?
          </p>
          <button
            className="bg-gray-800 hover:bg-gray-500 text-white  font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
            // type="submit"
            href="#"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
