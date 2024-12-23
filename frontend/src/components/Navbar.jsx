import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../sony.png";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";

const Navbar = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div className="flex justify-between items-center mb-6">
     <h1 className="text-2xl font-semibold">
      { children }
     </h1>
     <div className="flex items-center space-x-4">
      <i className="fas fa-bell text-xl">
      </i>
      <i className="fas fa-comment-dots text-xl">
      </i>
      <img alt="User Avatar" className="w-10 h-10 rounded-full" height="40" src="https://storage.googleapis.com/a1aa/image/rTD5Al4LemR1ZCIdZB8fM3FesGm6GgUlQv6ibbl6m6A08S7nA.jpg" width="40"/>
     </div>
    </div>
    // <div>
    //   <nav
    //     className="navbar is-fixed-top has-shadow"
    //     role="navigation"
    //     aria-label="main navigation"
    //   >
    //     <div className="navbar-brand">
    //       <NavLink to="/dashboard" className="navbar-item">
    //         <img src={logo} width="112" height="28" alt="logo" />
    //       </NavLink>

    //       <a
    //         href="!#"
    //         role="button"
    //         className="navbar-burger burger"
    //         aria-label="menu"
    //         aria-expanded="false"
    //         data-target="navbarBasicExample"
    //       >
    //         <span aria-hidden="true"></span>
    //         <span aria-hidden="true"></span>
    //         <span aria-hidden="true"></span>
    //       </a>
    //     </div>

    //     <div id="navbarBasicExample" className="navbar-menu">
    //       <div className="navbar-end">
    //         <div className="navbar-item">
    //           <div className="buttons">
    //             <button onClick={logout} className="button is-light">
    //               Log out
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
  );
};

export default Navbar;
