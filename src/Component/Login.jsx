import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignUp from "./SingUp";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSignUp, setShowSignUp] = useState(false);

  const handleShowSignUp = () => {
    setShowSignUp(!showSignUp);
  };


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>   
       { !showSignUp &&
    
     <div className="flex items-center justify-center h-screen bg-black">
      <form
        className="bg-white  shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl text-center mb-8">Login</h2>
        <div className="">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="bg-slate-900 border border-slate-800 text-white rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="bg-slate-900 border border-slate-800 text-white rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button onClick={!showSignUp}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <div className="flex items-center justify-between">
          <p
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            don't have an account?
          </p>
          <button  onClick={handleShowSignUp}
            className="bg-blue-500 hover:bg-blue-700 text-white  font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
            // type="submit"
            href="#"
          >
            Sign up
          </button>
        </div>
      </form>

    </div>
     }
    { showSignUp &&   <SignUp />} 
    </>

  );
};

export default Login;
