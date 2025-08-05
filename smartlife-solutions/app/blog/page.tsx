export default function Blog() {
  const blogPosts = [
    {
      title: "Top 10 Smart Home Trends in 2024",
      excerpt: "Discover the latest trends in home automation technology that are shaping the future of smart homes in India.",
      date: "January 15, 2024",
      category: "Trends",
      readTime: "5 min read",
      image: "📱"
    },
    {
      title: "Smart Home Security: Complete Guide for Hyderabad Residents",
      excerpt: "Everything you need to know about securing your home with smart technology, tailored for Hyderabad&apos;s unique requirements.",
      date: "January 10, 2024",
      category: "Security",
      readTime: "8 min read",
      image: "🔐"
    },
    {
      title: "Energy Savings with Smart Home Automation",
      excerpt: "Learn how smart home technology can reduce your electricity bills by up to 40% with practical tips and real examples.",
      date: "January 5, 2024",
      category: "Energy",
      readTime: "6 min read",
      image: "⚡"
    },
    {
      title: "Voice Assistants vs Smart Hubs: Which is Right for You?",
      excerpt: "Compare different smart home control options and find the perfect solution for your family&apos;s needs and budget.",
      date: "December 28, 2023",
      category: "Technology",
      readTime: "7 min read",
      image: "🎤"
    },
    {
      title: "Smart Lighting Design Ideas for Indian Homes",
      excerpt: "Creative ways to implement smart lighting in traditional and modern Indian home designs with cultural considerations.",
      date: "December 20, 2023",
      category: "Design",
      readTime: "5 min read",
      image: "💡"
    },
    {
      title: "Home Automation ROI: Is It Worth the Investment?",
      excerpt: "Detailed analysis of the return on investment for smart home technology, including property value increases and utility savings.",
      date: "December 15, 2023",
      category: "Investment",
      readTime: "9 min read",
      image: "📊"
    }
  ];

  const categories = ["All", "Trends", "Security", "Energy", "Technology", "Design", "Investment"];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">SmartLife Blog</h1>
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
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === "All"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-blue-600 p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">📱</div>
                  <span className="bg-blue-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mr-3">
                    Trends
                  </span>
                  <span className="text-gray-500 text-sm">January 15, 2024 • 5 min read</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Top 10 Smart Home Trends in 2024
                </h2>
                <p className="text-gray-600 mb-4">
                  Discover the latest trends in home automation technology that are shaping the future of smart homes in India. 
                  From AI-powered assistants to sustainable energy solutions, explore what&apos;s coming next.
                </p>
                <a 
                  href="#" 
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Read Full Article →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4">
                  <span className="text-2xl">{post.image}</span>
                </div>
                
                <div className="flex items-center mb-3">
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium mr-3">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{post.date}</span>
                  <a 
                    href="#" 
                    className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Stay Updated with Smart Home Tips
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest smart home insights, 
            product reviews, and exclusive offers delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}