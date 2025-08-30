import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <section className="py-12 min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center">
      <div className="bg-black/80 rounded-2xl shadow-2xl p-6 sm:p-10 w-full max-w-md flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mb-4 shadow-lg">
          <span className="text-4xl font-bold text-white font-gaming">U</span>
        </div>
        <h2 className="text-2xl font-bold text-white mb-1 font-gaming text-glow">
          Username
        </h2>
        <p className="text-gray-400 mb-4 font-fantasy">user@email.com</p>
        <div className="flex flex-col gap-3 w-full mt-4">
          <Link
            to="/settings"
            className="w-full bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white px-6 py-2 rounded-lg font-bold font-gaming text-glow shadow-lg hover:shadow-orange-500/50 transition-all text-center"
          >
            User Setting
          </Link>
          <Link
            to="/change-password"
            className="w-full bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white px-6 py-2 rounded-lg font-bold font-gaming text-glow shadow-lg hover:shadow-red-500/50 transition-all text-center"
          >
            Change Password
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Profile;
