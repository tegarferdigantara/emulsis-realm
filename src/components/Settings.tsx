import React, { useState } from "react";

const Settings = () => {
  const [name, setName] = useState("Username");
  const [email, setEmail] = useState("user@email.com");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulasi update
    alert("Profile updated!");
  };

  return (
    <section className="py-12 min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-black/80 rounded-2xl shadow-2xl p-6 sm:p-10 w-full max-w-md flex flex-col items-center"
      >
        <h2 className="text-2xl font-bold text-white mb-6 font-gaming text-glow">
          User Setting
        </h2>
        <div className="w-full mb-4">
          <label className="block text-gray-300 font-fantasy mb-2">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg bg-black/70 border border-orange-500 text-white focus:outline-none font-fantasy"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="w-full mb-6">
          <label className="block text-gray-300 font-fantasy mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded-lg bg-black/70 border border-orange-500 text-white focus:outline-none font-fantasy"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white px-6 py-2 rounded-lg font-bold font-gaming text-glow shadow-lg hover:shadow-orange-500/50 transition-all"
        >
          Save Changes
        </button>
      </form>
    </section>
  );
};

export default Settings;
