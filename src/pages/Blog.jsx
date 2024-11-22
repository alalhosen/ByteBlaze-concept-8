import { useLoaderData } from "react-router-dom";

const Blog = () => {
    const blog= useLoaderData()
    return (
        <div>
            <h1>single blog details</h1>
        </div>
    );
};

export default Blog;