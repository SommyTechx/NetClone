// import React from "react";
// import Navbar from "../components/Navbar";
// import hero_img from "../assets/hero_banner.jpg";
// import herotitle from "../assets/hero_title.png";
// import playerbtn from "../assets/play_icon.png";
// import infoicon from "../assets/info_icon.png";
// import TitleCard from "../components/TitleCard";
// import Footer from "../components/Footer";
// const Home = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className="  relative font-family">
//         <img
//           src={hero_img}
//           alt="hero image"
//           className=" w-full object-cover max-h-[90vh] [mask-image:linear-gradient(to_right,transparent,black_75%)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_75%)] "
//         />
//         <div className="absolute w-full lg:pl-10 sm:pl-10 bottom-0    ">
//           <img
//             src={herotitle}
//             alt="hero title"
//             className="lg:w-full lg:max-w-[420px] mb-4 sm:w-[40%] "
//           />
//           <p className="lg:max-w-[550px] sm:max-w-[280px] text-base sm:text-lg md:text-xl lg:text-zxl mb-4 ">
//             Discovering his ties to a secret ancient order, a young man living
//             in modern istanbul embarks on a quest to save thw city from an
//             immortal
//           </p>
//           <div
//             className="flex gap-[1rem] lg:mb-[50px]
//           md:mb-[35px] sm:mb-[25px]"
//           >
//             <button className="flex items-center bg-amber-50 text-black text-base sm:text-lg md:text-xl lg:text-2xl p-2 sm:px-6 md:px-8 lg:px-12 border-0 outline-0 rounded-[4px] cursor-pointer gap-2 hover:bg-[#ffffffbf] ">
//               <img
//                 src={playerbtn}
//                 alt="Play button"
//                 className="w-6 sm:w-[25px]"
//               />
//               Play
//             </button>
//             <button className="flex items-center bg-[#6d6d6eb3]  text-[#fff] text-base p-[5px_20px]  border-0 outline-0 rounded-[4px] cursor-pointer gap-2 hover:bg-[#6d6d6e66]">
//               <img src={infoicon} alt="Play button" className="w-[30px] " />
//               More Info
//             </button>
//           </div>
//           <TitleCard
//             title="Only On Netflix"
//             className="
//           "
//           />
//         </div>
//       </div>
//       <div className=" ">
//         <TitleCard title="Now Playing" category={"top_rated"} />
//         <TitleCard title="Popular" category={"popular"} />
//         <TitleCard title="Top Rated" category={"top_rated"} />
//         <TitleCard title="Upcoming" category={"upcoming"} />
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Home;

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
    <div className="font-family">
      <Navbar />

      {/* Hero Section */}
      <div className="relative">
        <img
          src={hero_img}
          alt="hero"
          className="w-full object-cover max-h-[90vh] [mask-image:linear-gradient(to_right,transparent,black_75%)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_75%)]"
        />
        <div className="absolute inset-0   flex flex-col justify-end px-4 sm:px-8 md:px-10 lg:px-14 pb-4 sm:pb-6 md:pb-12  ">
          <img
            src={herotitle}
            alt="hero title"
            className="w-[60%] sm:w-[40%] md:w-[35%] lg:max-w-[420px] mb-4 sm:mb-2 md:mb-4 lg:mb-6"
          />

          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-[90%] sm:max-w-[400px] lg:max-w-[550px] text-white mb-4">
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="flex items-center bg-amber-50 text-black text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-6 md:px-8 py-2 rounded-md gap-2 hover:bg-[#ffffffbf]">
              <img src={playerbtn} alt="Play" className="w-5 sm:w-6" />
              Play
            </button>
            <button className="flex items-center bg-[#6d6d6eb3] text-white text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 rounded-md gap-2 hover:bg-[#6d6d6e66]">
              <img src={infoicon} alt="Info" className="w-6" />
              More Info
            </button>
          </div>

          <div className="mt-4 lg:flex hidden ">
            <TitleCard title="Only On Netflix" className="" />
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="px-2 sm:px-3 md:px-6">
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
