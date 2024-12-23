import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);
  // <div>
  //   <h1 classNameName="title">Dashboard</h1>
  //   <h2 classNameName="subtitle">
  //     Welcome Back <strong>{user && user.name}</strong>
  //   </h2>
  // </div>
  return (
    <div className="flex-1 p-6">
      {/* Welcome */}
      <Navbar>
        Good morning, {user && user.name}!
      </Navbar>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-500">Your bank balance</p>
          <h2 className="text-2xl font-semibold">$143,624</h2>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-500">Uncategorized transactions</p>
          <h2 className="text-2xl font-semibold">12</h2>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-500">Employees working today</p>
          <h2 className="text-2xl font-semibold">7</h2>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-500">This week's card spending</p>
          <h2 className="text-2xl font-semibold">$3,287.49</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-500">New clients</p>
          <h2 className="text-2xl font-semibold">
            54
            <span className="text-green-500">+18.7%</span>
          </h2>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-500">Invoices overdue</p>
          <h2 className="text-2xl font-semibold">
            6<span className="text-red-500">+2.7%</span>
          </h2>
        </div>
        <div className="bg-white p-4 rounded-lg shadow col-span-2 lg:col-span-1">
          <p className="text-gray-500">Revenue</p>
          <div className="h-32">
            <img
              alt="Revenue chart"
              height="100"
              src="https://storage.googleapis.com/a1aa/image/q18GB8xpsVrMMd8VzMGe0V0fdshSm5sdLJO6sB0namyYeS7nA.jpg"
              width="300"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow col-span-2">
          <p className="text-gray-500">Recent emails</p>
          <div className="space-y-4 mt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  alt="Hannah Morgan"
                  className="w-10 h-10 rounded-full"
                  height="40"
                  src="https://storage.googleapis.com/a1aa/image/c0NMwZYRyEq6JtjaGZYwZsM5AyjX35yeAxqcxzokM1SQv0eTA.jpg"
                  width="40"
                />
                <div>
                  <p className="font-semibold">Hannah Morgan</p>
                  <p className="text-gray-500">Meeting scheduled</p>
                </div>
              </div>
              <p className="text-gray-500">1:24 PM</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  alt="Megan Clark"
                  className="w-10 h-10 rounded-full"
                  height="40"
                  src="https://storage.googleapis.com/a1aa/image/fVc0XCrJnW2IZ6fvYrBiYT9PVmPYZNUSnAiiFxGy8StVeS7nA.jpg"
                  width="40"
                />
                <div>
                  <p className="font-semibold">Megan Clark</p>
                  <p className="text-gray-500">Update on marketing campaign</p>
                </div>
              </div>
              <p className="text-gray-500">12:32 PM</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  alt="Brandon Williams"
                  className="w-10 h-10 rounded-full"
                  height="40"
                  src="https://storage.googleapis.com/a1aa/image/aGvBsWjLT5r8PZswpotqexXrSgd7BqrbOpeLVVrq4OyXeS7nA.jpg"
                  width="40"
                />
                <div>
                  <p className="font-semibold">Brandon Williams</p>
                  <p className="text-gray-500">Designly 2.0 is about to launch</p>
                </div>
              </div>
              <p className="text-gray-500">Yesterday at 8:57 PM</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  alt="Reid Smith"
                  className="w-10 h-10 rounded-full"
                  height="40"
                  src="https://storage.googleapis.com/a1aa/image/vELe1ecvAohNNUCy4eTbEKGriQL6g45tz4rTOr0Gsa448S7nA.jpg"
                  width="40"
                />
                <div>
                  <p className="font-semibold">Reid Smith</p>
                  <p className="text-gray-500">My friend Julie loves Dappr!</p>
                </div>
              </div>
              <p className="text-gray-500">Yesterday at 8:49 PM</p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-black text-white p-4 rounded-lg shadow">
            <p className="text-gray-400">Formation status</p>
            <div className="flex items-center justify-between mt-2">
              <p className="text-sm">In progress</p>
              <div className="w-2/3 bg-gray-700 h-2 rounded-full overflow-hidden">
                <div className="bg-white h-full w-1/2"></div>
              </div>
            </div>
            <p className="text-sm mt-2">Estimated processing 4-5 business days</p>
            <button className="bg-white text-black mt-4 py-2 px-4 rounded-lg">
              View status
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-500">Your to-Do list</p>
            <div className="space-y-4 mt-4">
              <div className="flex items-center space-x-4">
                <i className="fas fa-check-circle text-xl"></i>
                <div>
                  <p className="font-semibold">Run payroll</p>
                  <p className="text-gray-500">Mar 4 at 6:00 pm</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <i className="fas fa-check-circle text-xl"></i>
                <div>
                  <p className="font-semibold">Review time off request</p>
                  <p className="text-gray-500">Mar 7 at 6:00 pm</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <i className="fas fa-check-circle text-xl"></i>
                <div>
                  <p className="font-semibold">Sign board resolution</p>
                  <p className="text-gray-500">Mar 12 at 6:00 pm</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <i className="fas fa-check-circle text-xl"></i>
                <div>
                  <p className="font-semibold">Finish onboarding Tony</p>
                  <p className="text-gray-500">Mar 12 at 6:00 pm</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black text-white p-4 rounded-lg shadow">
            <p className="text-gray-400">Board meeting</p>
            <p className="mt-2">Feb 22 at 6:00 PM</p>
            <p className="text-sm mt-2">
              You have been invited to attend a meeting of the Board Directors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
