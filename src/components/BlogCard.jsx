/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
const BlogCard = ({ blog }) => {
    const { cover_image, title, description, published_at } = blog
    return (
        <Link to={`/blog/${id}`} className="max-w-sm mx-auto group transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 hover:no-underline focus:no-underline dark:bg-gray-50">
            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image} />
            <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                <span className="text-xs dark:text-gray-600">January 21, 2021</span>
                <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
            </div>
        </Link>
    );
};

export default BlogCard;