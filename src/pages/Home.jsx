import Hero from "../components/Hero";
import wave from "../assets/wave.svg"
import waveTop from "../assets/waveTop.svg"
const Home = () => {
    return (
        
        <div className="relative flex flex-col justify-center items-center min-h-[calc(100vh-116px)]">
            <img className="top-0 absolute w-full h-1/3"  src={waveTop} alt="" />
            <Hero />
        <img className="bottom-0 absolute w-full h-2/5" src={wave} alt="" />
        </div>
    );
};

export default Home;