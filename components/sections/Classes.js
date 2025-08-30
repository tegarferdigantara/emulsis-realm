import { Sword, Shield, Zap, Bot as Bow, Wand2, Axe } from 'lucide-react';

const Classes = () => {
  const classes = [
    {
      name: "Knight",
      icon: Shield,
      description: "Master of defense and protection, wielding heavy armor and shields to guard allies.",
      stats: { attack: 70, defense: 95, magic: 30, speed: 40 },
      color: "from-blue-600 to-blue-800"
    },
    {
      name: "Warrior",
      icon: Sword,
      description: "Fierce melee combatant with devastating physical attacks and battle prowess.",
      stats: { attack: 95, defense: 70, magic: 25, speed: 60 },
      color: "from-red-600 to-red-800"
    },
    {
      name: "Archer",
      icon: Bow,
      description: "Precise ranged fighter with deadly accuracy and swift movement abilities.",
      stats: { attack: 80, defense: 50, magic: 40, speed: 90 },
      color: "from-green-600 to-green-800"
    },
    {
      name: "Mage",
      icon: Wand2,
      description: "Master of arcane arts, wielding powerful spells and elemental magic.",
      stats: { attack: 45, defense: 40, magic: 95, speed: 70 },
      color: "from-purple-600 to-purple-800"
    },
    {
      name: "Assassin",
      icon: Zap,
      description: "Swift shadow warrior specializing in stealth, critical strikes, and agility.",
      stats: { attack: 85, defense: 45, magic: 55, speed: 95 },
      color: "from-gray-600 to-gray-800"
    },
    {
      name: "Giant",
      icon: Axe,
      description: "Divine warrior descended from the gods, wielding both might and magic in battle.",
      stats: { attack: 90, defense: 80, magic: 80, speed: 60 },
      color: "from-yellow-400 to-yellow-700"
    }
  ];

  const StatBar = ({ value, color }) => (
    <div className="bg-gray-700 rounded-full h-2 overflow-hidden">
      <div 
        className={`h-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
        style={{ width: `${value}%` }}
      />
    </div>
  );

  return (
    <section id="classes" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-gaming">
            Choose Your <span className="text-red-500 text-glow-red">Class</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-fantasy">
            Each class offers unique abilities, playstyles, and paths to victory. Master your chosen path and become legendary.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {classes.map((characterClass, index) => (
            <div 
              key={index}
              className="group gaming-card rounded-xl overflow-hidden hover:border-red-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30"
            >
              <div className={`bg-gradient-to-r ${characterClass.color} p-6 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <characterClass.icon className="w-full h-full" />
                </div>
                <div className="relative z-10">
                  <characterClass.icon className="w-12 h-12 text-white mb-4" />
                  <h3 className="text-2xl font-bold text-white font-gaming text-glow">{characterClass.name}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-400 mb-6 leading-relaxed font-fantasy">
                  {characterClass.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300 font-gaming">Attack</span>
                      <span className="text-red-400 font-bold font-gaming">{characterClass.stats.attack}</span>
                    </div>
                    <StatBar value={characterClass.stats.attack} color="from-red-500 to-red-600" />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300 font-gaming">Defense</span>
                      <span className="text-blue-400 font-bold font-gaming">{characterClass.stats.defense}</span>
                    </div>
                    <StatBar value={characterClass.stats.defense} color="from-blue-500 to-blue-600" />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300 font-gaming">Magic</span>
                      <span className="text-purple-400 font-bold font-gaming">{characterClass.stats.magic}</span>
                    </div>
                    <StatBar value={characterClass.stats.magic} color="from-purple-500 to-purple-600" />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300 font-gaming">Speed</span>
                      <span className="text-green-400 font-bold font-gaming">{characterClass.stats.speed}</span>
                    </div>
                    <StatBar value={characterClass.stats.speed} color="from-green-500 to-green-600" />
                  </div>
                </div>

                <button className="w-full mt-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 rounded-lg font-bold transition-all duration-300 group-hover:shadow-xl group-hover:shadow-red-500/50 font-gaming text-glow transform hover:scale-105">
                  Select Class
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;