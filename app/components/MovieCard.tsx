/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { addFavorite } from "../data/addFavorite";
import { removeFavorite } from "../data/removeFavorite";

/* This is the props / attributes you will be able to send to the component*/
type MovieCardProps = {
  title: string;
  imdbId: string;
  backgroundImg: string;
  isFavorite?: boolean;
  /* onFavoriteClick: () => void; */
};

/* This is the React component which will be rendered on your page */
const MovieCard = ({
  title,
  backgroundImg,
  imdbId,
  isFavorite = false,
}: MovieCardProps) => {
  const [showFavorite, setShowFavorite] = useState(isFavorite);

  const toggleFavorite = () => {
    if (!showFavorite) {
      addFavorite(imdbId);
    } else {
      removeFavorite(imdbId);
    }
    setShowFavorite(!showFavorite);
  };

  return (
    <div className="relative h-[var(--imgHeight)] w-[var(--imgWidth)]">
      <img
        src={backgroundImg}
        alt=""
        className="w-[var(--imgWidth)] h-[var(--imgHeight)] rounded-[var(--border-radius)] absolute top-0 right-0"
      />
      <div className="rounded-[var(--border-radius)] absolute w-full h-full bg-gradient-to-b from-[rgba(33,33,33,0.2)] to-[rgba(0,0,0,1)] text-white flex flex-col p-3 box-border ">
        <button onClick={toggleFavorite}>
          <img
            className="mt-auto h-8 w-8 hover:opacity-80"
            src={showFavorite ? "/fav-checked.png" : "/fav-unchecked.png"}
            alt=""
          />
        </button>
        <h3 className="mt-auto">{title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
