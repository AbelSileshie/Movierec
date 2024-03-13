import React from "react";

function Login() {
  return (
    <div>
      <div className="bg-black  ">
        <h1 className="text-3xl text-white font-bold underline "> Login</h1>
        <form className="text-white">
          <div className="mr-5 p-2">
            <label>
              Email:
              <input
                type="text" placeholder="emile or phone number "
                name="name"
                className="bg-black text-white border-b-4-white"
              />
            </label>
          </div>
          <div className="mr-5 p-6">
            <label>
              Password:
              <input type="password" name="name" className="bg-black" />
            </label>
          </div>
          <br />
          <br />
          <div className="continer max-auto">
            <input type="submit" value="Submit" className="m-20" />
          </div>
        </form>
        .
      </div>
    </div>
  );
}

export default Login;
