import React from "react";
import Navbar from "../components/Navbar";
import hero_img from "../assets/hero_banner.jpg";
import herotitle from "../assets/hero_title.png";
import playerbtn from "../assets/play_icon.png";
import infoicon from "../assets/info_icon.png";
import TitleCard from "../components/TitleCard";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="  relative font-family">
        <img
          src={hero_img}
          alt="hero image"
          className=" w-full [mask-image:linear-gradient(to_right,transparent,black_75%)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_75%)] "
        />
        <div className="absolute w-full pl-[6%] bottom-0 ">
          <img
            src={herotitle}
            alt=""
            className="w-[90%] max-w-[420px] mb-[20px]"
          />
          <p className="max-w-[550px] text-[1.7rem] mb-[20px]">
            Discovering his ties to a secret ancient order, a young man living
            in modern istanbul embarks on a quest to save thw city from an
            immortal
          </p>
          <div className="flex gap-[1rem] mb-[50px]">
            <button className="flex items-center bg-amber-50 text-black text-[2rem] h-[4.5rem] p-[5px_20px] border-0 outline-0 rounded-[4px] cursor-pointer gap-2 hover:bg-[#ffffffbf]">
              <img src={playerbtn} alt="Play button" className="w-[30px] " />
              Play
            </button>
            <button className="flex items-center bg-[#6d6d6eb3]  text-[#fff] text-[2rem] h-[4.5rem] p-[5px_20px]  border-0 outline-0 rounded-[4px] cursor-pointer gap-2 hover:bg-[#6d6d6e66]">
              <img src={infoicon} alt="Play button" className="w-[30px] " />
              More Info
            </button>
          </div>
          <TitleCard title="Only On Netflix" />
        </div>
      </div>
      <div className="">
        <TitleCard title="Now Playing" category={"top_rated"} />
        <TitleCard title="Popular" category={"popular"} />
        <TitleCard title="Top Rated" category={"top_rated"} />
        <TitleCard title="Upcoming" category={"upcoming"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
