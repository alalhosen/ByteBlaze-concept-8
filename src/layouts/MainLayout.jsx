import { Outlet } from "react-router-dom";
// import Blogs from "../assets/pages/Blogs";
// import Bookmarks from "../assets/pages/Bookmarks";
// import Home from "../assets/Pages/Home";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div>
            <div className="h-16">
                <Nav />
            </div>

            {/* packet */}
            <Outlet />
            {/* footer */}
            <Footer /> 
        </div>
    );
};

export default MainLayout;