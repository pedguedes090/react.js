import React from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xs">
        <h1 className="text-2xl font-bold mb-6 text-center">Login Account</h1>
        <div className="flex flex-col gap-3">
          <label htmlFor="email" className="font-medium">
            Your email
          </label>
          <input
            id="email"
            type="email"
            placeholder="name@company.com"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <label htmlFor="password" className="font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="*****"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <label htmlFor="confirmPassword" className="font-medium">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="*****"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            className="bg-blue-600 text-white rounded py-2 mt-4 hover:bg-blue-700 font-semibold"
            onClick={() => navigate("/login")}
          >
            create
          </button>
        </div>
      </div>
    </div>
  );
}
