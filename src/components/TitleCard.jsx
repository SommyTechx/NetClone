// import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";

// const TitleCard = ({ title, category }) => {
//   const [apiData, setApiData] = useState([]);
//   const scrollRef = useRef();

//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjUyNzNkZjJhNTZiMWNlZjFhZWNjNmVkODRhNDAyYSIsIm5iZiI6MTc0NTI2NDA4NC4zNjgsInN1YiI6IjY4MDY5ZGQ0YzVjODAzNWZiMDhhMzU0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HY3C5pgEdGaLt2z-3zYneYJB5JQa4ZpdvB6RiWMOrhY",
//     },
//   };

//   const handleWheel = (event) => {
//     event.preventDefault();
//     scrollRef.current.scrollLeft += event.deltaY;
//   };

//   useEffect(() => {
//     fetch(
//       `https://api.themoviedb.org/3/movie/${
//         category ? category : "now_playing"
//       }?language=en-US&page=1`,
//       options
//     )
//       .then((res) => res.json())
//       .then((res) => setApiData(res.results))
//       .catch((err) => console.error(err));
//     scrollRef.current.addEventListener("wheel", handleWheel);
//   }, []);
//   return (
//     <div className="mt-[20px]  mb-[30px]  relative ">
//       <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl mb-[8px]  font-semibold pl-2">
//         {title}
//       </h2>
//       <div
//         ref={scrollRef}
//         className="flex gap-[5px]  overflow-x-auto scroll-smooth hide-scrollbar pb-4 "
//       >
//         {apiData.map((card, index) => {
//           return (
//             <Link to={`/player/${card.id}`} key={index}>
//               <div
//                 className="relative w-[240px] hover:scale-105 transition-transform duration-200 flex-shrink-0 snap-start"
//                 key={index}
//               >
//                 <img
//                   src={`https://image.tmdb.org/t/p/w500/` + card.backdrop_path}
//                   alt={card.title}
//                   className=" rounded-[4px] cursor-pointer :w-full h-auto "
//                 />
//                 <p className="absolute bottom-[10px]  right-[10px] text-base sm:text-lg md:text-xl lg:text-2xl  bg-black/35 border-0 px-2 py-1  ">
//                   {card.title}
//                 </p>
//               </div>
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default TitleCard;

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const TitleCard = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const scrollRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjUyNzNkZjJhNTZiMWNlZjFhZWNjNmVkODRhNDAyYSIsIm5iZiI6MTc0NTI2NDA4NC4zNjgsInN1YiI6IjY4MDY5ZGQ0YzVjODAzNWZiMDhhMzU0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HY3C5pgEdGaLt2z-3zYneYJB5JQa4ZpdvB6RiWMOrhY",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    scrollRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));

    if (scrollRef.current) {
      scrollRef.current.addEventListener("wheel", handleWheel, {
        passive: false,
      });
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div className="mt-6 mb-10 relative">
      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl mb-3 font-semibold pl-2">
        {title}
      </h2>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth hide-scrollbar px-2 pb-4"
      >
        {apiData.map((card, index) => (
          <Link to={`/player/${card.id}`} key={index}>
            <div className="relative w-[70vw] sm:w-[40vw] md:w-[300px] lg:w-[340px] hover:scale-105 transition-transform duration-200 flex-shrink-0">
              <img
                src={`https://image.tmdb.org/t/p/w500/${card.backdrop_path}`}
                alt={card.title}
                className="w-[80%] h-auto rounded-md object-cover "
              />
              <p className="absolute bottom-4 right-25 text-xs sm:text-sm md:text-base lg:text-lg bg-black/60 text-white px-2 py-1 rounded">
                {card.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCard;
