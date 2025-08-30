import { Users, Crown, Sword, Trophy, Shield, Star } from 'lucide-react';

const Guilds = () => {
  const topGuilds = [
    {
      name: "Crimson Legion",
      members: 150,
      level: 85,
      leader: "DragonSlayer",
      emblem: Crown,
      color: "from-red-600 to-red-800"
    },
    {
      name: "Shadow Hunters",
      members: 142,
      level: 82,
      leader: "NightBlade",
      emblem: Sword,
      color: "from-gray-600 to-gray-800"
    },
    {
      name: "Divine Order",
      members: 138,
      level: 80,
      leader: "HolyPaladin",
      emblem: Shield,
      color: "from-blue-600 to-blue-800"
    }
  ];

  return (
    <section id="guilds" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-gaming">
            Guild <span className="text-red-500 text-glow-red">System</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-fantasy">
            Join forces with other players, participate in epic guild wars, and compete for dominance across the realm.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6 font-gaming text-glow-gold">Build Your Empire</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-red-600/20 to-orange-600/20 p-3 rounded-lg border border-red-500/30">
                  <Users className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2 font-gaming">Recruit Members</h4>
                  <p className="text-gray-400 font-fantasy">Build a powerful guild with up to 200 members and establish your hierarchy.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-red-600/20 to-orange-600/20 p-3 rounded-lg border border-red-500/30">
                  <Sword className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2 font-gaming">Guild Wars</h4>
                  <p className="text-gray-400 font-fantasy">Participate in massive guild vs guild battles for territory and resources.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-red-600/20 to-orange-600/20 p-3 rounded-lg border border-red-500/30">
                  <Trophy className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2 font-gaming">Ranking System</h4>
                  <p className="text-gray-400 font-fantasy">Climb the guild rankings and earn exclusive rewards and recognition.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="gaming-card rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center font-gaming text-glow-gold">
              <Trophy className="w-6 h-6 text-red-500 mr-2" />
              Top Guilds
            </h3>
            
            <div className="space-y-4">
              {topGuilds.map((guild, index) => (
                <div 
                  key={index}
                  className="bg-black/40 border border-red-900/20 rounded-lg p-4 hover:border-red-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`bg-gradient-to-r ${guild.color} p-2 rounded-lg`}>
                        <guild.emblem className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white font-gaming">{guild.name}</h4>
                        <p className="text-sm text-gray-400 font-fantasy">Leader: {guild.leader}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 text-yellow-400 mb-1">
                        <Star className="w-4 h-4" />
                        <span className="text-sm font-semibold font-gaming">Lv.{guild.level}</span>
                      </div>
                      <p className="text-xs text-gray-400 font-fantasy">{guild.members} members</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 rounded-lg font-bold transition-all duration-300 hover:shadow-xl hover:shadow-red-500/50 font-gaming text-glow transform hover:scale-105">
              Create Guild
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guilds;