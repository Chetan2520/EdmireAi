import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiCalendar, FiUser, FiClock, FiShare2 } from 'react-icons/fi';

const BlogDetail = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_URL = "https://edmirai.com/php/adminbackend/api";

    useEffect(() => {
        fetchBlog();
    }, [slug]);

    const fetchBlog = async () => {
        try {
            const res = await axios.get(`${API_URL}/read_single.php?slug=${slug}`);
            let data = res.data;

            // Handle potential string prepended response
            if (typeof data === 'string' && data.includes('Connected successfully')) {
                const jsonPart = data.replace('Connected successfully', '').trim();
                try {
                    data = JSON.parse(jsonPart);
                } catch (e) {
                    console.error("Failed to parse fixed JSON", e);
                }
            }

            setBlog(data);
            setLoading(false);
        } catch (err) {
            console.error(err);
            setError("Could not fetch the blog post.");
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="animate-pulse flex flex-col items-center">
                    <div className="h-4 bg-gray-200 rounded w-32 mb-4"></div>
                    <div className="h-64 w-96 bg-gray-200 rounded-xl"></div>
                </div>
            </div>
        );
    }

    if (error || !blog) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 flex-col gap-4">
                <h2 className="text-2xl font-bold text-gray-800">Post not found</h2>
                <Link to="/blogs" className="text-blue-600 underline hover:text-blue-800">Back to Blogs</Link>
            </div>
        );
    }

    return (
        <article className="min-h-screen bg-white font-sans text-gray-900 pb-20">
            {/* Header / Hero Section */}
            <div className="relative h-[60vh] w-full bg-gray-900">
                <img
                    src={blog.image || "https://via.placeholder.com/1200x800?text=No+Image"}
                    alt={blog.title}
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20 text-white">
                    <div className="max-w-4xl mx-auto">
                        <Link to="/blogs" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors text-sm font-bold uppercase tracking-widest">
                            <FiArrowLeft className="mr-2" /> Back to Stories
                        </Link>

                        <div className="flex flex-wrap items-center gap-4 md:gap-8 text-sm md:text-base mb-6 font-medium text-white/90">
                            <span className="bg-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                {blog.category || 'Insight'}
                            </span>
                            <div className="flex items-center gap-2">
                                <FiCalendar />
                                {new Date(blog.createdAt).toLocaleDateString(undefined, {
                                    year: 'numeric', month: 'long', day: 'numeric'
                                })}
                            </div>
                            <div className="flex items-center gap-2">
                                <FiUser />
                                {blog.author || 'Author'}
                            </div>
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-8">
                            {blog.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
                <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl leading-relaxed text-lg text-gray-800">
                    <div
                        className="prose prose-lg prose-blue max-w-none 
                        prose-headings:font-bold prose-headings:text-gray-900 
                        prose-p:leading-8 prose-p:mb-6
                        prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                        prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-10"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />

                    {/* Footer Share / Author */}
                    <div className="mt-16 pt-10 border-t border-gray-100 flex items-center justify-between">
                        <div className="text-sm text-gray-500 font-medium">
                            Published by <span className="text-gray-900 font-bold">{blog.author || 'GrowVia Team'}</span>
                        </div>
                        <button className="flex items-center gap-2 text-gray-900 font-bold hover:text-blue-600 transition-colors">
                            <FiShare2 /> <span className="hidden md:inline">Share this story</span>
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default BlogDetail;
