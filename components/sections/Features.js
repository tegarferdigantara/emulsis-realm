import { Sword, Shield, Users, Zap, Crown, Globe } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Sword,
      title: "Epic PvP Combat",
      description:
        "Engage in intense player vs player battles with skill-based combat system and strategic gameplay.",
    },
    {
      icon: Users,
      title: "Guild Warfare",
      description:
        "Form powerful alliances and participate in massive guild wars for territory control and glory.",
    },
    {
      icon: Crown,
      title: "Castle Sieges",
      description:
        "Lead epic siege battles to conquer castles and claim dominion over vast territories.",
    },
    {
      icon: Shield,
      title: "Advanced Crafting",
      description:
        "Master the art of weapon and armor crafting to create legendary equipment.",
    },
    {
      icon: Zap,
      title: "Skill Evolution",
      description:
        "Develop unique skill combinations and evolve your character's abilities.",
    },
    {
      icon: Globe,
      title: "Massive World",
      description:
        "Explore vast continents filled with dungeons, monsters, and hidden treasures.",
    },
  ];

  return (
    <section
      id="features"
      className="py-10 md:py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 font-gaming">
            Game <span className="text-red-500 text-glow-red">Features</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto font-fantasy">
            Experience the most immersive MMORPG with cutting-edge features
            designed for epic adventures
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group gaming-card rounded-xl p-8 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30"
            >
              <div className="bg-gradient-to-br from-red-600/20 to-orange-600/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-red-600/40 group-hover:to-orange-600/40 transition-all duration-300 border border-red-500/30">
                <feature.icon className="w-8 h-8 text-red-500" />
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-all duration-300 font-gaming group-hover:text-glow">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-relaxed font-fantasy">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;