import React from 'react';
import { Sword, Facebook, Twitter, Youtube, Twitch, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-red-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Sword className="w-8 h-8 text-red-500" />
              <span className="text-2xl font-bold text-white font-gaming text-glow-red">ROHAN ONLINE</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed font-fantasy">
              The ultimate MMORPG experience awaits. Join millions of players in epic adventures across mystical realms.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Twitch className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 font-gaming text-glow-gold">Game</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-all duration-300 font-fantasy hover:text-glow">Download</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-all duration-300 font-fantasy hover:text-glow">System Requirements</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-all duration-300 font-fantasy hover:text-glow">Game Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-all duration-300 font-fantasy hover:text-glow">Classes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-all duration-300 font-fantasy hover:text-glow">Skills</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 font-gaming text-glow-gold">Community</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-all duration-300 font-fantasy hover:text-glow">Forums</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-all duration-300 font-fantasy hover:text-glow">Discord</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-all duration-300 font-fantasy hover:text-glow">Events</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-all duration-300 font-fantasy hover:text-glow">Guilds</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-all duration-300 font-fantasy hover:text-glow">Rankings</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 font-gaming text-glow-gold">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-all duration-300 font-fantasy hover:text-glow">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-all duration-300 font-fantasy hover:text-glow">Bug Reports</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-all duration-300 font-fantasy hover:text-glow">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-all duration-300 font-fantasy hover:text-glow">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-all duration-300 font-fantasy hover:text-glow">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-red-900/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-fantasy">
              © 2025 Rohan Online. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm font-fantasy">Stay updated:</span>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="bg-gray-800 border border-gray-700 rounded px-3 py-1 text-sm text-white focus:outline-none focus:border-red-500 font-fantasy"
                />
                <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-3 py-1 rounded text-sm transition-all duration-300 font-gaming font-bold hover:shadow-lg hover:shadow-red-500/30">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;