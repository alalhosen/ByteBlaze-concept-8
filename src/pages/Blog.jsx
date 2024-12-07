import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Blog = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const blog = useLoaderData()
    const {
        comments_count, title, reading_time_minutes, public_reactions_count, published_at
    } = blog
    return (
        <div className="space-y-12 mx-auto px-6 py-16 max-w-3xl">
            <article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
                <div className="space-y-6">
                    <h1 className="font-bold text-4xl md:text-5xl md:tracking-tight">{title}</h1>
                    <div className="flex md:flex-row flex-col justify-between items-start md:items-center w-full dark:text-gray-600">

                        <p className="text-sm">{reading_time_minutes} min read • {new Date(published_at).toLocaleDateString()}</p>

                        <p className="flex-shrink-0 mt-3 md:mt-0 text-sm">
                            {comments_count} comments • {public_reactions_count} views</p>
                    </div>

                    {/* Tabs */}

                    <div className="flex flex-nowrap sm:justify-start items-center dark:bg-gray-100 -mx-4 dark:text-gray-800 overflow-x-auto overflow-y-hidden">

                        <Link 
                        to=''
                            onClick={() => setTabIndex(0)}
                            className={`flex flex-shrink-0 items-center space-x-2 dark:border-gray-600 px-5 py-3 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:text-gray-900`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                            </svg>
                            <span>Content</span>
                        </Link>
                        <Link
                            onClick={() => setTabIndex(1)}
                            to={`author`}
                            className={`flex flex-shrink-0 items-center space-x-2 dark:border-gray-600 px-5 py-3 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:text-gray-900`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                            </svg>
                            <span>Author</span>
                        </Link>
                    </div>
                </div>
            </article>

            <div>
                <div className="flex flex-wrap gap-2 dark:border-gray-600 py-6 border-t border-dashed">
                    <a rel="noopener noreferrer" href="#" className="dark:bg-violet-600 px-3 py-1 rounded-sm dark:text-gray-50 hover:underline">#MambaUI</a>
                    <a rel="noopener noreferrer" href="#" className="dark:bg-violet-600 px-3 py-1 rounded-sm dark:text-gray-50 hover:underline">#TailwindCSS</a>
                    <a rel="noopener noreferrer" href="#" className="dark:bg-violet-600 px-3 py-1 rounded-sm dark:text-gray-50 hover:underline">#Angular</a>
                </div>
                <div className="space-y-2">
                    <h4 className="font-semibold text-lg">Related posts</h4>
                    <ul className="space-y-1 ml-4 list-disc">
                        <li>
                            <a rel="noopener noreferrer" href="#" className="hover:underline">Nunc id magna mollis</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#" className="hover:underline">Duis molestie, neque eget pretium lobortis</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#" className="hover:underline">Mauris nec urna volutpat, aliquam lectus sit amet</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blog;