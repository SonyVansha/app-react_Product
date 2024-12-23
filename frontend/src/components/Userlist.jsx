import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Userlist = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/users`);
    setUsers(response.data);
  };

  const deleteUser = async (userId) => {
    await axios.delete(`${process.env.REACT_APP_API_URL}/users/${userId}`);
    getUsers();
  };

  return (
    <div>
      <div className=" bg-white p-3 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            User Data List
          </h2>
          <Link to="/users/add" 
            className="text-sm text-white bg-blue-500 hover:bg-blue-700 rounded px-2 py-1"
          >
            Add New
          </Link>
          {/* <button className="text-blue-500">
            See all
          </button> */}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            {/* Table Head */}
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                  Name
                </th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                  Email
                </th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                  Role
                </th>
                <th className="py-3 px-6"></th>
              </tr>
            </thead>

            {/* Table Data */}
            <tbody>
            {users.map((user, index) => (
              <tr className="border-t border-gray-200" key={user.uuid}>
                <td className="py-4 px-6 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold mr-3">
                    {user.name.charAt(0)}
                  </div>
                  <span className="text-gray-800">{user.name}</span>
                </td>
                <td className="py-4 px-6 text-gray-600">{user.email}</td>
                <td className="py-4 px-6 text-gray-600">{user.role}</td>
                <td>
                  <Link
                    to={`/users/edit/${user.uuid}`}
                    className="text-sm text-white bg-blue-500 hover:bg-blue-700 rounded px-2 py-1"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user.uuid)}
                    className="text-sm text-white bg-red-500 hover:bg-red-700 rounded px-2 py-1"
                  >
                    Delete
                  </button>
                </td>
                {/* <td className="py-4 px-6 text-right">
                  <i className="fas fa-ellipsis-h text-gray-400"></i>
                </td> */}
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Userlist;
