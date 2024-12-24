import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";
import logo from "../sony.png";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    // <!-- Sidebar -->
    <div class="bg-black text-white w-full lg:w-20 flex flex-col items-center py-6">
      <div class="mb-8">
        <img
          alt="Logo"
          class="w-10 h-10"
          height="40"
          src={logo}
          width="40"
        />
      </div>
      
      {/* <!-- Sidebar Nav --> */}
      <div class="space-y-8 flex flex-col items-center">
          <NavLink to={"/dashboard"}>
            <i class="fas fa-home text-xl"></i>
          </NavLink>
          <NavLink to={"/products"}>
            <i class="fas fa-paperclip text-xl"></i>
          </NavLink>
          {user && user.role === "admin" && (
            <>
              <NavLink to={"/users"}>
                <i class="fas fa-user text-xl"></i>
              </NavLink>
            </>
          )}
        
        {/* Logout */}
        <button onClick={logout} className="text-red-400">
          <i class="fas fa-arrow-left text-xl"></i>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
