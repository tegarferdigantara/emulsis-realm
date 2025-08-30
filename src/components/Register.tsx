import React, { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: handle register logic
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-red-950/40 to-black px-4">
      <div className="gaming-card rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-white mb-6 text-center font-gaming text-glow">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 font-fantasy mb-2" htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              className="w-full px-4 py-3 rounded-lg bg-black/70 border border-orange-500 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 font-fantasy"
              placeholder="Enter your username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 font-fantasy mb-2" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-3 rounded-lg bg-black/70 border border-orange-500 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 font-fantasy"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 font-fantasy mb-2" htmlFor="password">Password</label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                className="w-full px-4 py-3 rounded-lg bg-black/70 border border-orange-500 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 font-fantasy pr-12"
                placeholder="Create a password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-400 hover:text-orange-200 text-sm font-gaming"
                onClick={() => setShowPassword(v => !v)}
                tabIndex={-1}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-gray-300 font-fantasy mb-2" htmlFor="confirmPassword">Confirm Password</label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                className="w-full px-4 py-3 rounded-lg bg-black/70 border border-orange-500 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 font-fantasy pr-12"
                placeholder="Repeat your password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-400 hover:text-orange-200 text-sm font-gaming"
                onClick={() => setShowConfirmPassword(v => !v)}
                tabIndex={-1}
              >
                {showConfirmPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white px-6 py-3 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105 font-gaming text-glow shadow-lg hover:shadow-orange-500/50"
          >
            Register
          </button>
        </form>
        <div className="text-center mt-6">
          <span className="text-gray-400 font-fantasy">Already have an account?</span>{' '}
          <a href="/login" className="text-red-400 hover:text-red-300 font-gaming font-bold hover:text-glow transition-all">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Register; 