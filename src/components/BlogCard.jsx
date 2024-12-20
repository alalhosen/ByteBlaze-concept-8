/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import placeholderImage from '../assets/404.jpg'
// eslint-disable-next-line no-unused-vars
const BlogCard = ({ blog }) => {
    const { cover_image, title, description, published_at, id} = blog
    return (
        <Link to={`/blog/${id}`} className="border-2 border-primary hover:border-secondary dark:bg-gray-50 mx-auto border-opacity-30 max-w-sm hover:no-underline focus:no-underline transition group hover:scale-105">
            <img role="presentation" className="dark:bg-gray-500 rounded w-full h-44 object-cover" src={cover_image || placeholderImage} />
            <div className="space-y-2 p-6">
                <h3 className="group-focus:underlin font-semibold text-2xl group-hover:underline">{title}</h3>
                <span className="text-xs dark:text-gray-600"> {new Date(published_at).toLocaleDateString()}</span>
                <p>{description}</p>
            </div>
        </Link>
    );
};

export default BlogCard;