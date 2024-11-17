
const Hero = () => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold">Welcome to <span>BytrBlaze</span></h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <div className="flex gap-2 justify-center">
            <Link to='/blogs'></Link>
            <Link to='bookmarks'></Link>

          </div>
          <button className="btn btn-primary">Read Blogs</button>
          <button className="btn btn-primary">Bookmarks</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;