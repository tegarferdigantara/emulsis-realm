import { Calendar, Clock, ArrowRight } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      title: "Major Update 3.5: Rise of the Dragon Lords",
      excerpt: "New continent, dragon mounts, and legendary weapons await brave adventurers in this massive content update.",
      date: "2025-01-15",
      readTime: "5 min read",
      category: "Update",
      image: "https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
    },
    {
      title: "Guild War Championship 2025 Begins",
      excerpt: "The ultimate test of guild supremacy starts this weekend. Register your guild for epic battles and exclusive rewards.",
      date: "2025-01-12",
      readTime: "3 min read",
      category: "Event",
      image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
    },
    {
      title: "New Player Experience Improvements",
      excerpt: "Enhanced tutorial system, starter gear upgrades, and mentorship program to help new heroes begin their journey.",
      date: "2025-01-10",
      readTime: "4 min read",
      category: "Improvement",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
    }
  ];

  return (
    <section id="news" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-gaming">
            Latest <span className="text-red-500 text-glow-red">News</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-fantasy">
            Stay updated with the latest game updates, events, and community news from the world of Rohan Online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article 
              key={index}
              className="group gaming-card rounded-xl overflow-hidden hover:border-red-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-1 rounded-full text-sm font-bold font-gaming text-glow">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-all duration-300 line-clamp-2 font-gaming group-hover:text-glow">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-3 leading-relaxed font-fantasy">
                  {item.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span className="font-gaming">{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span className="font-gaming">{item.readTime}</span>
                  </div>
                </div>

                <button className="group/btn flex items-center space-x-2 text-red-400 hover:text-red-300 transition-all duration-300 font-gaming hover:text-glow">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 hover:shadow-xl hover:shadow-red-500/50 font-gaming text-glow transform hover:scale-105">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;