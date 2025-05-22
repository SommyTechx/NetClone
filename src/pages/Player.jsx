import React, { useEffect, useState } from "react";
import back_arrow_icon from "../assets/back_arrow_icon.png";
import { Link, useParams } from "react-router-dom";
import TitleCard from "../components/TitleCard";

const Player = () => {
  const { id } = useParams();
  const [moviedetail, setMovieDetails] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjUyNzNkZjJhNTZiMWNlZjFhZWNjNmVkODRhNDAyYSIsIm5iZiI6MTc0NTI2NDA4NC4zNjgsInN1YiI6IjY4MDY5ZGQ0YzVjODAzNWZiMDhhMzU0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HY3C5pgEdGaLt2z-3zYneYJB5JQa4ZpdvB6RiWMOrhY",
    },
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setMovieDetails(res.results[0]))
      .catch((err) => console.error(err));
  });

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center w-full bg-black">
        <div className="absolute top-4 left-4 z-10">
          <Link to={"/"}>
            <img
              src={back_arrow_icon}
              alt="arrow"
              className="lg:w-[50px] sm:w-[25px] cursor-pointer hover:scale-105 transition-transform duration-200"
            />
          </Link>
        </div>
        <div className="w-full h-[80vh] flex justify-center">
          <iframe
            className="rounded-[10px] w-full h-full"
            src={`https://www.youtube.com/embed/${moviedetail.key}?autoplay=1&controls=1&rel=0`}
            title="Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder="0"
          ></iframe>
        </div>

        <div className="flex items-center justify-between w-[90%] mt-1 text-white lg:text-[1.8rem] sm:text-[1.4rem]">
          <p>{moviedetail.published_at.slice(0, 10)}</p>
          <p>{moviedetail.name}</p>
          <p>{moviedetail.typeof}</p>
        </div>
      </div>
      <TitleCard title={"Popular"} />
    </>
  );
};

export default Player;
