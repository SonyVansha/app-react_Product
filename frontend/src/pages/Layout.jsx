import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="bg-blue-50 text-gray-800">

        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Sidebar Nav  */}
          <Sidebar />

          {/* main content*/}
          <div className="flex-1 p-6">
            <main>{children}</main>
          </div>
        </div>
      </div>
      {/* <Navbar />
      <div className="columns mt-6" style={{ minHeight: "100vh" }}>
        <div className="column is-2">
        </div>
        <div className="column has-background-light">
          <main>{children}</main>
        </div>
      </div> */}
    </React.Fragment>
  );
};

export default Layout;
