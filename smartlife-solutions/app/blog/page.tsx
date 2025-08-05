export default function Blog() {
  const blogPosts = [
    {
      title: "Top 10 Smart Home Trends in 2024",
      excerpt: "Discover the latest trends in home automation technology that are shaping the future of smart homes in India.",
      date: "January 15, 2024",
      category: "Trends",
      readTime: "5 min read",
      image: "📱",
      size: "large"
    },
    {
      title: "Smart Home Security: Complete Guide for Hyderabad Residents",
      excerpt: "Everything you need to know about securing your home with smart technology, tailored for Hyderabad's unique requirements.",
      date: "January 10, 2024",
      category: "Security",
      readTime: "8 min read",
      image: "🔐",
      size: "medium"
    },
    {
      title: "Energy Savings with Smart Home Automation",
      excerpt: "Learn how smart home technology can reduce your electricity bills by up to 40% with practical tips and real examples.",
      date: "January 5, 2024",
      category: "Energy",
      readTime: "6 min read",
      image: "⚡",
      size: "small"
    },
    {
      title: "Voice Assistants vs Smart Hubs: Which is Right for You?",
      excerpt: "Compare different smart home control options and find the perfect solution for your family's needs and budget.",
      date: "December 28, 2023",
      category: "Technology",
      readTime: "7 min read",
      image: "🎤",
      size: "medium"
    },
    {
      title: "Smart Lighting Design Ideas for Indian Homes",
      excerpt: "Creative ways to implement smart lighting in traditional and modern Indian home designs with cultural considerations.",
      date: "December 20, 2023",
      category: "Design",
      readTime: "5 min read",
      image: "💡",
      size: "small"
    },
    {
      title: "Home Automation ROI: Is It Worth the Investment?",
      excerpt: "Detailed analysis of the return on investment for smart home technology, including property value increases and utility savings.",
      date: "December 15, 2023",
      category: "Investment",
      readTime: "9 min read",
      image: "📊",
      size: "large"
    }
  ];

  const categories = ["All", "Trends", "Security", "Energy", "Technology", "Design", "Investment"];

  const getMasonryClasses = (size: string, index: number) => {
    const baseClasses = "bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2";
    
    switch (size) {
      case "large":
        return `${baseClasses} col-span-12 md:col-span-6 lg:col-span-4 row-span-6`;
      case "medium":
        return `${baseClasses} col-span-12 md:col-span-6 lg:col-span-4 row-span-4`;
      case "small":
        return `${baseClasses} col-span-12 md:col-span-6 lg:col-span-4 row-span-3`;
      default:
        return `${baseClasses} col-span-12 md:col-span-6 lg:col-span-4`;
    }
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">SmartLife Blog</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, tips, and insights in home automation technology. 
              Expert advice for smart home enthusiasts in Hyderabad and beyond.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  category === "All"
                    ? "bg-blue-600 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post - Full width */}
          <div className="mb-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="grid grid-cols-12 gap-0">
                <div className="col-span-12 md:col-span-4 bg-gradient-to-br from-blue-500 to-blue-600 p-8 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">📱</div>
                    <span className="bg-blue-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-8 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mr-3">
                      Trends
                    </span>
                    <span className="text-gray-500 text-sm">January 15, 2024 • 5 min read</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Top 10 Smart Home Trends in 2024
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Discover the latest trends in home automation technology that are shaping the future of smart homes in India. 
                                         From AI-powered assistants to sustainable energy solutions, explore what&apos;s coming next.
                  </p>
                  <a 
                    href="#" 
                    className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
                  >
                    Read Full Article →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Masonry Grid Layout */}
          <div className="grid grid-cols-12 gap-6 auto-rows-[50px]">
            {blogPosts.slice(1).map((post) => {
              const isLarge = post.size === "large";
              const isMedium = post.size === "medium";
              
                             return (
                 <article key={post.title} className={getMasonryClasses(post.size, 0)}>
                   <div className="p-6 h-full flex flex-col">
                    {/* Icon and Category */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                        <span className="text-xl">{post.image}</span>
                      </div>
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className={`font-bold text-gray-900 mb-3 line-clamp-2 ${
                      isLarge ? 'text-xl' : isMedium ? 'text-lg' : 'text-base'
                    }`}>
                      {post.title}
                    </h3>
                    
                    {/* Excerpt - Show more content for larger cards */}
                    <p className={`text-gray-600 mb-4 flex-grow ${
                      isLarge ? 'line-clamp-4 text-sm' : isMedium ? 'line-clamp-3 text-sm' : 'line-clamp-2 text-xs'
                    }`}>
                      {post.excerpt}
                    </p>
                    
                    {/* Footer */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <div className="flex flex-col">
                        <span className="text-gray-500 text-xs">{post.date}</span>
                        <span className="text-blue-600 text-xs font-medium">{post.readTime}</span>
                      </div>
                      <a 
                        href="#" 
                        className="text-blue-600 hover:text-blue-800 font-semibold text-xs hover:underline"
                      >
                        Read More →
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
            
            {/* Additional masonry grid items */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4 row-span-2 bg-gradient-to-r from-green-400 to-green-500 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Weekly Newsletter</h3>
              <p className="text-green-100 text-sm">Get smart home tips delivered to your inbox</p>
            </div>
            
            <div className="col-span-12 md:col-span-6 lg:col-span-4 row-span-3 bg-purple-50 border border-purple-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-purple-800 mb-2">Case Studies</h3>
              <p className="text-purple-600 text-sm mb-4">Real smart home transformations in Hyderabad</p>
              <a href="/case-studies" className="text-purple-600 font-semibold text-sm hover:underline">
                View All →
              </a>
            </div>
            
            <div className="col-span-12 md:col-span-6 lg:col-span-4 row-span-2 bg-orange-50 border border-orange-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-orange-800 mb-2">Expert Consultation</h3>
              <p className="text-orange-600 text-sm">Free smart home planning session</p>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-blue-600 rounded-xl p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Stay Updated with Smart Home Tips
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest smart home insights, 
              product reviews, and exclusive offers delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}