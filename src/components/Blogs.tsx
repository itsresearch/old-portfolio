import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blogs = () => {
  const blogs = [
    {
      title: "Understanding React Hooks: A Comprehensive Guide",
      excerpt: "Learn about React Hooks and how they can simplify your React components while making them more reusable and maintainable.",
      date: "2024-03-15",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      link: "#"
    },
    {
      title: "Python Best Practices for Clean Code",
      excerpt: "Discover essential Python coding practices that will help you write cleaner, more maintainable, and efficient code.",
      date: "2024-03-10",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",
      link: "#"
    },
    {
      title: "Modern Web Development with Django",
      excerpt: "Explore modern web development techniques using Django framework and best practices for building scalable applications.",
      date: "2024-03-05",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen p-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-blue-400">Blog Posts</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.title}
              className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{blog.excerpt}</p>
                
                <a
                  href={blog.link}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Read More
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;