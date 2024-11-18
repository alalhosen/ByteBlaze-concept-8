import Hero from "../components/Hero";
import wave from "../assets/wave.svg"
import waveTop from "../assets/waveTop.svg"
const Home = () => {
    return (
        
        <div className="flex flex-col relative items-center justify-center min-h-[calc(100vh-116px)]">
            <img className="absolute top-0 h-1/3 w-full"  src={waveTop} alt="" />
            <Hero />
        <img className="absolute bottom-0 w-full h-2/5" src={wave} alt="" />
        </div>
    );
};

export default Home;