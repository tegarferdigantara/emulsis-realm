import React, { useState } from "react";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    // Simulasi update
    alert("Password changed!");
  };

  return (
    <section className="py-12 min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-black/80 rounded-2xl shadow-2xl p-6 sm:p-10 w-full max-w-md flex flex-col items-center"
      >
        <h2 className="text-2xl font-bold text-white mb-6 font-gaming text-glow">
          Change Password
        </h2>
        <div className="w-full mb-4">
          <label className="block text-gray-300 font-fantasy mb-2">
            Old Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-2 rounded-lg bg-black/70 border border-red-500 text-white focus:outline-none font-fantasy"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>
        <div className="w-full mb-4">
          <label className="block text-gray-300 font-fantasy mb-2">
            New Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-2 rounded-lg bg-black/70 border border-orange-500 text-white focus:outline-none font-fantasy"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="w-full mb-6">
          <label className="block text-gray-300 font-fantasy mb-2">
            Confirm New Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-2 rounded-lg bg-black/70 border border-orange-500 text-white focus:outline-none font-fantasy"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white px-6 py-2 rounded-lg font-bold font-gaming text-glow shadow-lg hover:shadow-red-500/50 transition-all"
        >
          Save Password
        </button>
      </form>
    </section>
  );
};

export default ChangePassword;
