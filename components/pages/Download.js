import { Download as DownloadIcon, Info, HelpCircle, FileText } from 'lucide-react';

const mirrors = [
  { name: 'Google Drive', url: '#' },
  { name: 'Mega.nz', url: '#' },
  { name: 'Direct Link', url: '#' },
];

const requirements = [
  { label: 'OS', value: 'Windows 7/8/10/11 (64-bit)' },
  { label: 'Processor', value: 'Intel Core i3 or equivalent' },
  { label: 'Memory', value: '4 GB RAM' },
  { label: 'Graphics', value: 'Intel HD 4000 / AMD Radeon HD 5450 / NVIDIA GeForce 210 or better' },
  { label: 'Storage', value: '10 GB available space' },
];

const faqs = [
  { q: 'How to install the game?', a: 'Download the installer, run it, and follow the on-screen instructions.' },
  { q: 'Is the download free?', a: 'Yes, the client is free to download and play.' },
  { q: 'I get an error during install, what should I do?', a: 'Check your antivirus/firewall, ensure enough disk space, and try running as administrator.' },
];

const Download = () => (
  <section id="download" className="py-20 bg-gradient-to-b from-gray-900 to-black min-h-screen">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center font-gaming text-glow">Download Game Client</h2>
      <div className="gaming-card rounded-xl p-8 shadow-lg mb-10 text-center">
        <p className="text-lg text-gray-300 mb-6 font-fantasy">Download the latest version of the game client and join the adventure!</p>
        <a href="#" className="inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-10 py-4 rounded-lg text-2xl font-bold font-gaming text-glow shadow-lg hover:shadow-red-500/50 transition-all mb-4">
          <DownloadIcon className="w-7 h-7 mr-3" /> Download Now
        </a>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
          {mirrors.map(m => (
            <a key={m.name} href={m.url} className="flex items-center space-x-2 bg-black/60 border border-orange-500 text-orange-400 px-6 py-2 rounded-lg font-gaming font-bold hover:bg-orange-500 hover:text-white transition-all">
              <DownloadIcon className="w-4 h-4" /> <span>{m.name}</span>
            </a>
          ))}
        </div>
      </div>
      {/* System Requirements */}
      <div className="gaming-card rounded-xl p-6 shadow-lg mb-10">
        <div className="flex items-center mb-4 space-x-2">
          <Info className="w-5 h-5 text-orange-400" />
          <span className="font-bold text-white font-gaming">System Requirements</span>
        </div>
        <ul className="text-gray-200 font-fantasy space-y-2">
          {requirements.map(r => (
            <li key={r.label} className="flex justify-between border-b border-gray-800 pb-2">
              <span className="text-gray-400">{r.label}</span>
              <span className="text-white font-bold">{r.value}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* FAQ / Help */}
      <div className="gaming-card rounded-xl p-6 shadow-lg">
        <div className="flex items-center mb-4 space-x-2">
          <HelpCircle className="w-5 h-5 text-orange-400" />
          <span className="font-bold text-white font-gaming">Download Help & FAQ</span>
        </div>
        <ul className="text-gray-200 font-fantasy space-y-4">
          {faqs.map((f, i) => (
            <li key={i}>
              <div className="font-bold text-orange-400 mb-1 flex items-center gap-2"><FileText className="w-4 h-4" /> {f.q}</div>
              <div className="ml-6">{f.a}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Download;