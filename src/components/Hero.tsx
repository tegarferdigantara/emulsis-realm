import React from "react";
import { Play, Download, Users } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-6 sm:py-10 md:py-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-black">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-1 sm:px-4">
        <h1 className="text-xl sm:text-5xl md:text-8xl font-bold text-white mb-2 sm:mb-6 leading-tight font-gaming">
          <span className="bg-gradient-to-r from-red-400 via-orange-500 to-red-600 bg-clip-text text-transparent text-glow-red">
            ROHAN
          </span>
          <br />
          <span className="text-white text-glow">EMULSIS</span>
        </h1>

        <p className="text-base sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed font-fantasy">
          Enter a world of endless adventure, epic battles, and legendary
          heroes. Forge your destiny in the ultimate MMORPG experience.
        </p>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center mb-6 sm:mb-12">
          <button className="group bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:via-red-800 hover:to-red-900 text-white px-4 sm:px-8 py-2 sm:py-4 rounded-lg text-sm sm:text-lg font-bold transition-all duration-300 transform hover:scale-110 flex items-center space-x-2 sm:space-x-3 shadow-2xl hover:shadow-red-500/50 font-gaming text-glow border border-red-400/30">
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            <span>Download Now</span>
          </button>

          <button className="group border-2 border-red-600 text-red-400 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 hover:text-white px-4 sm:px-8 py-2 sm:py-4 rounded-lg text-sm sm:text-lg font-bold transition-all duration-300 transform hover:scale-110 flex items-center space-x-2 sm:space-x-3 font-gaming hover:text-glow hover:shadow-lg hover:shadow-red-500/30">
            <Play className="w-5 h-5 group-hover:animate-pulse" />
            <span>Watch Trailer</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 text-center">
          <div className="gaming-card backdrop-blur-sm rounded-lg p-6 hover:bg-black/60 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/20">
            <Users className="w-8 h-8 text-red-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-white mb-2 font-gaming text-glow-gold">
              50,000+
            </h3>
            <p className="text-gray-400 font-fantasy">Active Players</p>
          </div>

          <div className="gaming-card backdrop-blur-sm rounded-lg p-6 hover:bg-black/60 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/20">
            <div className="w-8 h-8 bg-red-500 rounded mx-auto mb-3 flex items-center justify-center">
              <span className="text-white font-bold font-gaming">5</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 font-gaming text-glow-gold">
              5 Classes
            </h3>
            <p className="text-gray-400 font-fantasy">Unique Characters</p>
          </div>

          <div className="gaming-card backdrop-blur-sm rounded-lg p-6 hover:bg-black/60 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/20">
            <div className="w-8 h-8 bg-red-500 rounded mx-auto mb-3 flex items-center justify-center">
              <span className="text-white font-bold font-gaming">∞</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 font-gaming text-glow-gold">
              Endless
            </h3>
            <p className="text-gray-400 font-fantasy">Adventures</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
