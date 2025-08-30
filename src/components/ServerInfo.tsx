import React from 'react';
import { Server, Users, Activity, AlertTriangle, Cpu, MemoryStick, Network } from 'lucide-react';

const servers = [
  { name: 'Phoenix', status: 'Online', population: 'High', ping: '25ms', lastRestart: '2 hours ago', players: 2543 },
  { name: 'Dragon', status: 'Online', population: 'Medium', ping: '30ms', lastRestart: '5 hours ago', players: 1872 },
  { name: 'Griffin', status: 'Online', population: 'Low', ping: '28ms', lastRestart: '1 day ago', players: 943 },
  { name: 'Titan', status: 'Maintenance', population: 'N/A', ping: 'N/A', lastRestart: 'In progress', players: 0 },
];

const maintenance = [
  { name: 'Phoenix', date: 'June 20, 2025 (2:00 - 6:00 UTC)' },
  { name: 'Dragon', date: 'June 21, 2025 (2:00 - 6:00 UTC)' },
  { name: 'Griffin', date: 'June 22, 2025 (2:00 - 6:00 UTC)' },
  { name: 'Titan', date: 'In Progress (Until June 18, 2025)' },
];

const performance = [
  { label: 'CPU Usage', value: 45, color: 'bg-green-500' },
  { label: 'Memory Usage', value: 62, color: 'bg-yellow-400' },
  { label: 'Network Load', value: 38, color: 'bg-green-500' },
];

const rules = [
  {
    title: 'General Rules',
    items: [
      'Respect all players and staff members',
      'No offensive language, harassment, or discrimination',
      'No exploiting bugs or using third-party programs',
      'No account sharing or selling',
      'No spamming in chat channels',
    ],
  },
  {
    title: 'PvP Rules',
    items: [
      'No camping respawn points',
      'No intentional disconnecting during PvP',
      'Guild wars must be declared through proper channels',
      'Safe zones are to be respected at all times',
    ],
  },
  {
    title: 'Trading Rules',
    items: [
      'All trades are final',
      'No scamming or misleading other players',
      'Real money trading (RMT) is strictly prohibited',
      'Report suspicious trading activity to moderators',
    ],
  },
];

const statusColor = (status: string) => {
  if (status === 'Online') return 'text-green-400';
  if (status === 'Maintenance') return 'text-yellow-300';
  return 'text-red-400';
};

const ServerInfo = () => (
  <section id="server" className="py-20 bg-gradient-to-b from-gray-900 to-black min-h-screen">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 text-center font-gaming text-glow">Server Information</h2>
      {/* Server Status Overview */}
      <div className="gaming-card rounded-xl p-6 mb-8 shadow-lg">
        <div className="flex items-center mb-4 space-x-2">
          <Server className="w-6 h-6 text-red-400" />
          <span className="text-xl font-bold text-white font-gaming">Server Status Overview</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left font-fantasy text-gray-200">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-2">Server Name</th>
                <th>Status</th>
                <th>Population</th>
                <th>Ping</th>
                <th>Last Restart</th>
              </tr>
            </thead>
            <tbody>
              {servers.map((s) => (
                <tr key={s.name} className="border-b border-gray-800 hover:bg-black/30 transition">
                  <td className="py-2 font-bold text-white">{s.name}</td>
                  <td className={statusColor(s.status)}>{s.status}</td>
                  <td>{s.population}</td>
                  <td>{s.ping}</td>
                  <td>{s.lastRestart}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Active Players */}
        <div className="gaming-card rounded-xl p-6 shadow-lg">
          <div className="flex items-center mb-4 space-x-2">
            <Users className="w-5 h-5 text-red-400" />
            <span className="font-bold text-white font-gaming">Active Players</span>
          </div>
          {servers.filter(s => s.players > 0).map((s) => (
            <div key={s.name} className="mb-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300 font-gaming">{s.name}</span>
                <span className="text-red-400 font-bold font-gaming">{s.players.toLocaleString()} players</span>
              </div>
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-red-500 to-red-700" style={{ width: `${Math.min(s.players / 30, 100)}%` }} />
              </div>
            </div>
          ))}
        </div>
        {/* Scheduled Maintenance */}
        <div className="gaming-card rounded-xl p-6 shadow-lg">
          <div className="flex items-center mb-4 space-x-2">
            <AlertTriangle className="w-5 h-5 text-yellow-300" />
            <span className="font-bold text-white font-gaming">Scheduled Maintenance</span>
          </div>
          <ul className="text-gray-200 font-fantasy space-y-2">
            {maintenance.map((m) => (
              <li key={m.name} className="flex justify-between">
                <span>{m.name}</span>
                <span className="text-gray-400">{m.date}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Server Performance */}
        <div className="gaming-card rounded-xl p-6 shadow-lg">
          <div className="flex items-center mb-4 space-x-2">
            <Activity className="w-5 h-5 text-green-400" />
            <span className="font-bold text-white font-gaming">Server Performance</span>
          </div>
          <div className="space-y-4">
            {performance.map((p) => (
              <div key={p.label}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-300 font-gaming">{p.label}</span>
                  <span className="font-bold font-gaming text-gray-200">{p.value}%</span>
                </div>
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className={`h-full ${p.color}`} style={{ width: `${p.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Rules & Guidelines */}
      <div className="gaming-card rounded-xl p-6 shadow-lg">
        <h3 className="text-2xl font-bold text-white mb-4 font-gaming text-glow-gold">Server Rules & Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rules.map((rule) => (
            <div key={rule.title}>
              <h4 className="text-lg font-bold text-orange-400 mb-2 font-gaming">{rule.title}</h4>
              <ul className="list-disc list-inside text-gray-300 font-fantasy space-y-1">
                {rule.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ServerInfo; 