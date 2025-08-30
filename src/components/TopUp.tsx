import React, { useState } from 'react';
import { CreditCard, Coins, User, History } from 'lucide-react';

const topupOptions = [
  { label: '50 Rohan Points', value: 50, price: 'Rp 10.000' },
  { label: '120 Rohan Points', value: 120, price: 'Rp 20.000' },
  { label: '300 Rohan Points', value: 300, price: 'Rp 50.000' },
  { label: '650 Rohan Points', value: 650, price: 'Rp 100.000' },
];

const paymentMethods = [
  { label: 'Bank Transfer', value: 'bank' },
  { label: 'OVO', value: 'ovo' },
  { label: 'GoPay', value: 'gopay' },
  { label: 'Dana', value: 'dana' },
  { label: 'Pulsa', value: 'pulsa' },
];

const dummyHistory = [
  { date: '2024-06-01', amount: '120 Rohan Points', method: 'OVO', status: 'Success' },
  { date: '2024-05-28', amount: '50 Rohan Points', method: 'Bank Transfer', status: 'Success' },
  { date: '2024-05-20', amount: '300 Rohan Points', method: 'GoPay', status: 'Pending' },
];

const TopUp = () => {
  const [username, setUsername] = useState('');
  const [option, setOption] = useState(topupOptions[0].value);
  const [method, setMethod] = useState(paymentMethods[0].value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: handle top up logic
    alert('Top Up request submitted!');
  };

  return (
    <section id="topup" className="py-20 bg-gradient-to-b from-gray-900 to-black min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 text-center font-gaming text-glow">Top Up</h2>
        <div className="gaming-card rounded-xl p-8 shadow-lg mb-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 font-fantasy mb-2" htmlFor="username">Username</label>
              <div className="relative">
                <input
                  id="username"
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-black/70 border border-orange-500 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 font-fantasy pl-10"
                  placeholder="Enter your username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  required
                />
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400 w-5 h-5" />
              </div>
            </div>
            <div>
              <label className="block text-gray-300 font-fantasy mb-2">Top Up Amount</label>
              <div className="grid grid-cols-2 gap-4">
                {topupOptions.map(opt => (
                  <label key={opt.value} className={`flex items-center space-x-2 p-3 rounded-lg cursor-pointer border-2 transition-all font-gaming ${option === opt.value ? 'border-orange-500 bg-black/60' : 'border-gray-700 bg-black/40'}`}>
                    <input
                      type="radio"
                      name="topup"
                      value={opt.value}
                      checked={option === opt.value}
                      onChange={() => setOption(opt.value)}
                      className="accent-orange-500"
                    />
                    <Coins className="w-5 h-5 text-yellow-400" />
                    <span>{opt.label}</span>
                    <span className="text-sm text-gray-400 font-fantasy">({opt.price})</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-gray-300 font-fantasy mb-2">Payment Method</label>
              <div className="grid grid-cols-2 gap-4">
                {paymentMethods.map(pm => (
                  <label key={pm.value} className={`flex items-center space-x-2 p-3 rounded-lg cursor-pointer border-2 transition-all font-gaming ${method === pm.value ? 'border-orange-500 bg-black/60' : 'border-gray-700 bg-black/40'}`}>
                    <input
                      type="radio"
                      name="method"
                      value={pm.value}
                      checked={method === pm.value}
                      onChange={() => setMethod(pm.value)}
                      className="accent-orange-500"
                    />
                    <CreditCard className="w-5 h-5 text-orange-400" />
                    <span>{pm.label}</span>
                  </label>
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white px-6 py-3 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105 font-gaming text-glow shadow-lg hover:shadow-orange-500/50"
            >
              Top Up Now
            </button>
          </form>
        </div>
        {/* Top Up History */}
        <div className="gaming-card rounded-xl p-6 shadow-lg">
          <div className="flex items-center mb-4 space-x-2">
            <History className="w-5 h-5 text-orange-400" />
            <span className="font-bold text-white font-gaming">Top Up History</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left font-fantasy text-gray-200">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-2">Date</th>
                  <th>Amount</th>
                  <th>Method</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {dummyHistory.map((h, i) => (
                  <tr key={i} className="border-b border-gray-800 hover:bg-black/30 transition">
                    <td className="py-2 font-bold text-white">{h.date}</td>
                    <td>{h.amount}</td>
                    <td>{h.method}</td>
                    <td className={h.status === 'Success' ? 'text-green-400' : 'text-yellow-300'}>{h.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopUp; 