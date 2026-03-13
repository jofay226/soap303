"use client";
import { useEffect } from "react";
import axios from "axios";
import { parseStringPromise, Builder } from "xml2js";
import { headers } from "next/headers";

export default function Home() {

  const getAllUsers = async () => {
    const res = await axios.post("http://localhost:4000/api/soap", ,{
      headers: {
        "Content-type": "text/xml"
      }
    });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">
          Users CRUD Dashboard
        </h1>

        {/* Create User Form */}
        <div className="bg-white border-2 border-blue-300 p-6 rounded-xl shadow-lg mb-10">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">
            Create User
          </h2>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <input
              className="border-2 border-blue-200 p-3 rounded-lg focus:border-blue-500"
              placeholder="Name"
            />

            <input
              className="border-2 border-blue-200 p-3 rounded-lg focus:border-blue-500"
              placeholder="Email"
            />

            <input
              className="border-2 border-blue-200 p-3 rounded-lg focus:border-blue-500"
              placeholder="Age"
            />
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
            Create User
          </button>
        </div>

        {/* Users Table */}
        <div className="bg-white border-2 border-blue-300 rounded-xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Age</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>

            <tbody className="text-gray-800">
              <tr className="border-t hover:bg-blue-50">
                <td className="p-4">Ali</td>
                <td className="p-4">ali@test.com</td>
                <td className="p-4">25</td>
                <td className="p-4 space-x-2">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded">
                    Edit
                  </button>

                  <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                    Delete
                  </button>
                </td>
              </tr>

              <tr className="border-t hover:bg-blue-50">
                <td className="p-4">John</td>
                <td className="p-4">john@test.com</td>
                <td className="p-4">30</td>
                <td className="p-4 space-x-2">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded">
                    Edit
                  </button>

                  <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
