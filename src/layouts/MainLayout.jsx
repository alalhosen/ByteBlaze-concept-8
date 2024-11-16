import Blogs from "../assets/pages/Blogs";
import Bookmarks from "../assets/pages/Bookmarks";
import Home from "../assets/Pages/Home";
import Nav from "../components/Nav";

const MainLayout = () => {
    return (
        <div>
            <div className="h-16">
                <Nav />
            </div>
            <Home />
            <Blogs />
            <Bookmarks />
        </div>
    );
};

export default MainLayout;