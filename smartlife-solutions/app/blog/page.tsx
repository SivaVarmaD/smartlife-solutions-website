export default function Blog() {
  const blogPosts = [
    {
      title: "Top 10 Smart Home Trends in 2024",
      excerpt: "Discover the latest trends in home automation technology that are shaping the future of smart homes in India.",
      date: "January 15, 2024",
      category: "Trends",
      readTime: "5 min read",
      image: "📱",
      featured: true,
      height: "tall"
    },
    {
      title: "Smart Home Security: Complete Guide for Hyderabad Residents",
      excerpt: "Everything you need to know about securing your home with smart technology, tailored for Hyderabad&apos;s unique requirements.",
      date: "January 10, 2024",
      category: "Security",
      readTime: "8 min read",
      image: "🔐",
      height: "medium"
    },
    {
      title: "Energy Savings with Smart Home Automation",
      excerpt: "Learn how smart home technology can reduce your electricity bills by up to 40% with practical tips and real examples.",
      date: "January 5, 2024",
      category: "Energy",
      readTime: "6 min read",
      image: "⚡",
      height: "short"
    },
    {
      title: "Voice Assistants vs Smart Hubs: Which is Right for You?",
      excerpt: "Compare different smart home control options and find the perfect solution for your family&apos;s needs and budget.",
      date: "December 28, 2023",
      category: "Technology",
      readTime: "7 min read",
      image: "🎤",
      height: "medium"
    },
    {
      title: "Smart Lighting Design Ideas for Indian Homes",
      excerpt: "Creative ways to implement smart lighting in traditional and modern Indian home designs with cultural considerations.",
      date: "December 20, 2023",
      category: "Design",
      readTime: "5 min read",
      image: "💡",
      height: "short"
    },
    {
      title: "Home Automation ROI: Is It Worth the Investment?",
      excerpt: "Detailed analysis of the return on investment for smart home technology, including property value increases and utility savings.",
      date: "December 15, 2023",
      category: "Investment",
      readTime: "9 min read",
      image: "📊",
      height: "tall"
    },
    {
      title: "Setting Up Your First Smart Home Device",
      excerpt: "A beginner&apos;s guide to getting started with smart home technology in your Hyderabad home.",
      date: "December 10, 2023",
      category: "Beginner",
      readTime: "4 min read",
      image: "🏠",
      height: "short"
    },
    {
      title: "Smart Home Maintenance Tips",
      excerpt: "Keep your smart home running smoothly with these essential maintenance tips and troubleshooting guides.",
      date: "December 5, 2023",
      category: "Maintenance",
      readTime: "6 min read",
      image: "🔧",
      height: "medium"
    }
  ];

  const categories = ["All", "Trends", "Security", "Energy", "Technology", "Design", "Investment", "Beginner", "Maintenance"];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Trends": "bg-purple-100 text-purple-600",
      "Security": "bg-red-100 text-red-600",
      "Energy": "bg-green-100 text-green-600",
      "Technology": "bg-blue-100 text-blue-600",
      "Design": "bg-pink-100 text-pink-600",
      "Investment": "bg-yellow-100 text-yellow-600",
      "Beginner": "bg-indigo-100 text-indigo-600",
      "Maintenance": "bg-gray-100 text-gray-600"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-600";
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container">
          <div className="grid-12">
            <div className="col-12 md:col-10 md:col-start-2 text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                SmartLife Blog
              </h1>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
                Stay updated with the latest trends, tips, and insights in home automation technology. 
                Expert advice for smart home enthusiasts in Hyderabad and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white shadow-sm">
        <div className="container">
          <div className="grid-12">
            <div className="col-12">
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                      category === "All"
                        ? "bg-blue-600 text-white shadow-lg transform scale-105"
                        : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-md hover:shadow-lg hover:transform hover:scale-105"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid-12">
            <div className="col-12">
              <div className="card bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
                <div className="grid-12 gap-0">
                  <div className="col-12 md:col-8 p-8 md:p-12">
                    <div className="flex items-center mb-6">
                      <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mr-4">
                        Featured
                      </span>
                      <span className="bg-blue-400/30 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">
                        Trends
                      </span>
                      <span className="text-blue-200 text-sm">January 15, 2024 • 5 min read</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                      Top 10 Smart Home Trends in 2024
                    </h2>
                    <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                      Discover the latest trends in home automation technology that are shaping the future of smart homes in India. 
                      From AI-powered assistants to sustainable energy solutions, explore what&apos;s coming next.
                    </p>
                    <a 
                      href="#" 
                      className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg group"
                    >
                      Read Full Article
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </a>
                  </div>
                  <div className="col-12 md:col-4 bg-white/10 flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="text-8xl mb-4">📱</div>
                      <div className="text-2xl font-bold">2024 Trends</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Masonry Blog Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid-12">
            <div className="col-12 text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Latest Articles
              </h2>
              <p className="text-xl text-gray-600">
                Explore our comprehensive collection of smart home insights
              </p>
            </div>
          </div>
          
          {/* Masonry Grid */}
          <div className="masonry-grid">
            {blogPosts.slice(1).map((post, index) => (
              <article key={index} className={`masonry-item ${post.height === 'tall' ? 'h-96' : post.height === 'medium' ? 'h-80' : 'h-64'}`}>
                <div className="card h-full hover:shadow-2xl transition-all duration-500 group cursor-pointer">
                  <div className="h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl">
                        <span className="text-2xl">{post.image}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 flex-grow text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    {/* Footer */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mt-auto pt-4 border-t border-gray-100">
                      <span>{post.date}</span>
                      <span className="font-medium">{post.readTime}</span>
                    </div>
                    
                    <a 
                      href="#" 
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm mt-3 group-hover:transform group-hover:translate-x-1 transition-all duration-300"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </article>
            ))}
            
            {/* Placeholder Masonry Items */}
            <div className="masonry-item">
              <div className="card h-72 bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-dashed border-gray-300 hover:shadow-lg transition-all duration-300">
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="text-5xl mb-4">📝</div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">New Article</h3>
                  <p className="text-gray-500 text-sm">Coming soon...</p>
                </div>
              </div>
            </div>
            
            <div className="masonry-item">
              <div className="card h-64 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-dashed border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="text-4xl mb-3">🎯</div>
                  <h3 className="text-lg font-semibold text-blue-600 mb-2">Expert Tips</h3>
                  <p className="text-blue-500 text-sm">In development</p>
                </div>
              </div>
            </div>
            
            <div className="masonry-item">
              <div className="card h-80 bg-gradient-to-br from-green-50 to-green-100 border-2 border-dashed border-green-200 hover:shadow-lg transition-all duration-300">
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="text-6xl mb-4">🌟</div>
                  <h3 className="text-xl font-semibold text-green-600 mb-2">Case Study</h3>
                  <p className="text-green-500">Real customer story</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container">
          <div className="grid-12">
            <div className="col-12 md:col-8 md:col-start-3 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Stay Updated with Smart Home Tips
              </h3>
              <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest smart home insights, 
                product reviews, and exclusive offers delivered to your inbox.
              </p>
              <div className="max-w-md mx-auto mobile-stack">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 text-gray-900"
                />
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}