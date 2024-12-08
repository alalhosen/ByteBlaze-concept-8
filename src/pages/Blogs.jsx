
import { useLoaderData } from "react-router-dom";
import BlogCard from "../components/BlogCard";
const Blogs = () => {

    const blogs = useLoaderData()
    console.log(blogs);

    return (
        <section className="dark:bg-gray-100 py-6 dark:text-gray-800">
            <div className="space-y-6 sm:space-y-12 mx-auto p-6 max-w-6xl container">
                <a rel="noopener noreferrer" href="#" className="block gap-3 lg:grid lg:grid-cols-12 dark:bg-gray-50 mx-auto max-w-sm sm:max-w-full hover:no-underline focus:no-underline group">
                    <img src={blogs[0].cover_image} alt="" className="lg:col-span-7 dark:bg-gray-500 rounded w-full h-64 sm:h-96 object-cover" />
                    <div className="space-y-2 lg:col-span-5 p-6">
                        <h3 className="font-semibold text-2xl sm:text-4xl group-hover:underline group-focus:underline">{blogs[0].title}</h3>
                        <span className="text-xs dark:text-gray-600">{new Date(blogs[0].published_at).toLocaleDateString()}</span>
                        <p>{blogs[0].description}</p>
                    </div>
                </a>
                <div className="justify-center gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

                    {blogs.map(blog => (
                        <BlogCard blog={blog} key={blog.id} />
                    ))}
                </div>
    
            </div>
        </section>
    );
};

export default Blogs;