import { Outlet } from "react-router-dom";
// import Blogs from "../assets/pages/Blogs";
// import Bookmarks from "../assets/pages/Bookmarks";
// import Home from "../assets/Pages/Home";
import Nav from "../components/Nav";

const MainLayout = () => {
    return (
        <div>
            <div className="h-16">
                <Nav />
            </div>
            
            {/* pocket */}
            <Outlet />
        </div>
    );
};

export default MainLayout;