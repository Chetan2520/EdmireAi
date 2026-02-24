import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FiCalendar, FiUser, FiArrowRight } from 'react-icons/fi';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Using the same API URL as AdminPanel
    const API_URL = "https://edmirai.com/php/adminbackend/api";

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const res = await axios.get(`${API_URL}/read.php`);
            let data = res.data;

            // Handle potential string prepended response (same fix as AdminPanel)
            if (typeof data === 'string' && data.includes('Connected successfully')) {
                const jsonPart = data.replace('Connected successfully', '').trim();
                try {
                    data = JSON.parse(jsonPart);
                } catch (e) {
                    console.error("Failed to parse fixed JSON", e);
                }
            }

            if (Array.isArray(data)) {
                setBlogs(data);
            } else {
                setBlogs([]);
                console.warn("Expected array, got:", data);
            }
            setLoading(false);
        } catch (err) {
            console.error(err);
            setError("Failed to load blogs. Please try again later.");
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md mx-4">
                    <div className="text-red-500 text-5xl mb-4">⚠️</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Oops!</h3>
                    <p className="text-gray-600">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-6 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <section className="py-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-xs font-bold tracking-widest uppercase mb-4">
                        Our Blog
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                        Latest Insights & Stories
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Discover trends, expert advice, and success stories from the world of digital marketing.
                    </p>
                </div>

                {blogs.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">No stories published yet. Stay tuned!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {blogs.map((blog) => (
                            <Link
                                to={`/blog/${blog.slug}`}
                                key={blog._id}
                                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col h-full"
                            >
                                <div className="h-64 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                                    <img
                                        src={blog.image || "https://via.placeholder.com/800x600?text=No+Image"}
                                        alt={blog.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900 uppercase tracking-wider">
                                            {blog.category || 'Article'}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-medium uppercase tracking-wide">
                                        <div className="flex items-center gap-1">
                                            <FiCalendar />
                                            {new Date(blog.createdAt).toLocaleDateString(undefined, {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <FiUser />
                                            {blog.author || 'Admin'}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                                        {blog.title}
                                    </h3>

                                    <div
                                        className="text-gray-600 text-sm line-clamp-3 mb-6 flex-grow prose prose-sm"
                                        dangerouslySetInnerHTML={{
                                            __html: blog.content ? blog.content.replace(/<[^>]+>/g, '') : ''
                                        }}
                                    />

                                    <div className="flex items-center text-blue-600 font-bold uppercase text-xs tracking-widest mt-auto group/btn">
                                        Read More
                                        <FiArrowRight className="ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Blogs;
