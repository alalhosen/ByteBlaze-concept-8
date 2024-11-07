const Nav = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">ByteBlaze</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Link</a></li>
                    <li><a>Link</a></li>
                    <li><a>Link</a></li>
                   
                </ul>
            </div>
        </div>

    );
};

export default Nav;