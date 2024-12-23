import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";
import logo from "../sony.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  // <section className="hero is-fullheight is-fullwidth">
  //   <div className="hero-body">
  //     <div className="container">
  //       <div className="columns is-centered">
  //         <div className="column is-4">
  //           <form onSubmit={Auth} className="box">
  //             {isError && <p className="has-text-centered">{message}</p>}
  //             <h1 className="title is-2">Sign In</h1>
  //             <div className="field">
  //               <label className="label">Email</label>
  //               <div className="control">
  //                 <input
  //                   type="text"
  //                   className="input"
  //                   value={email}
  //                   onChange={(e) => setEmail(e.target.value)}
  //                   placeholder="Email"
  //                 />
  //               </div>
  //             </div>
  //             <div className="field">
  //               <label className="label">Password</label>
  //               <div className="control">
  //                 <input
  //                   type="password"
  //                   className="input"
  //                   value={password}
  //                   onChange={(e) => setPassword(e.target.value)}
  //                   placeholder="******"
  //                 />
  //               </div>
  //             </div>
  // <div className="field mt-5">
  //   <button
  //     type="submit"
  //     className="button is-success is-fullwidth"
  //   >
  //     {isLoading ? "Loading..." : "Login"}
  //   </button>
  // </div>
  //           </form>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </section>
  return (
    <div className="bg-white flex items-center justify-center min-h-screen">
      <div className="flex w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2 p-8">
          {/* Logo */}
          <div className="flex items-center mb-8">
            <img
              alt="Dotwork logo"
              className="w-10 h-10 mr-2"
              height="40"
              src={logo}
              width="40"
            />
            <span className="text-2xl font-bold text-blue-600">
              Sony Vansha
            </span>
          </div>
          <h2 className="text-2xl font-bold mb-2">Log in to your Account</h2>
          <p className="text-gray-600 mb-6">
            Welcome back! Select method to log in:
          </p>

          {/* Auth */}
          <div className="flex space-x-4 mb-6">
            <button className="flex-1 py-2 px-4 border border-gray-300 rounded-lg flex items-center justify-center font-bold">
              {/* <img
                alt="Google logo"
                className="w-5 h-5 mr-2"
                height="20"
                src="https://storage.googleapis.com/a1aa/image/YBjS7DoQLTrEJFM4eqbyq5sTM5Dq6fxaEuzKuThR5veb0Z7nA.jpg"
                width="20"
              /> */}
              Google
            </button>
            <button className="flex-1 py-2 px-4 border border-gray-300 rounded-lg flex items-center justify-center font-bold">
              {/* <img
                alt="Facebook logo"
                className="w-5 h-5 mr-2"
                height="20"
                src="https://storage.googleapis.com/a1aa/image/98qbD8qieaQQKiIK31YaM4cu4JKF2CT96NwGelDxoSZM6s9TA.jpg"
                width="20"
              /> */}
              Facebook
            </button>
          </div>
          <div className="flex items-center mb-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">or continue with email</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Form Login */}
          <form onSubmit={Auth}>
            {/* Notif Error Login */}
            {isError && <p className="has-text-centered">{message}</p>}

            {/* Form */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" for="email">
                Email
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                id="email"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" for="password">
                Password
              </label>
              <div className="relative">
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  id="password"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i className="fas fa-eye absolute right-3 top-3 text-gray-500"></i>
              </div>
            </div>

            {/* Forget Password */}
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input
                  className="form-checkbox text-blue-600"
                  type="checkbox"
                />
                <span className="ml-2 text-gray-700">Remember me</span>
              </label>
              <button className="text-blue-600 underline">
                Forgot Password?
              </button>
            </div>

            {/* Buttom Login */}
            <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg">
              Log in
            </button>

            {/* Loading */}
            {isLoading && (
              <div className="field mt-5">
                <button type="button" className="button is-success is-fullwidth" disabled>
                  Loading...
                </button>
              </div>
            )}
          </form>

          {/* Register */}
          <p className="mt-6 text-center text-gray-600">
            Don't have an account?
            <button className="text-blue-600 underline" onClick={() => navigate('/register')}>
              Create an account
            </button>
          </p>
        </div>

        {/* Illustration */}
        <div className="hidden md:flex md:w-1/2 bg-blue-600 p-8 flex-col items-center justify-center">
          <img
            alt="Illustration of connecting applications"
            className="mb-6"
            height="300"
            src="https://storage.googleapis.com/a1aa/image/vt2ACko1dtp1N1GLOLZErHeKd42tjCCX9tcd2JsTRFLFd2eTA.jpg"
            width="300"
          />
          <h3 className="text-white text-xl font-bold mb-2">
            Connect with every application.
          </h3>
          <p className="text-blue-200 text-center">
            Everything you need in an easily customizable dashboard.
          </p>
          <div className="flex space-x-2 mt-4">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
