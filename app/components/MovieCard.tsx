/* eslint-disable @next/next/no-img-element */

import { addFavoriteMovie } from "../utils/addFavoriteMovie";

/* This is the props / attributes you will be able to send to the component*/
type MovieProps = {
  title: string;
  img: string;
};

/* This is the React component which will be rendered on your page */
export const MovieCard = ({ title, img }: MovieProps) => {
  /* title and background is now available to use within your component */

  /* The render function returns the html to render */
  return <></>;
};

/* BELOW IN FINAL VERSION ONLY */

/* This is the props / attributes you will be able to send to the component*/
type MovieCardFinalProps = {
  title: string;
  imdbId: string;
  backgroundImg: string;
  isFavorite?: boolean;
  /* onFavoriteClick: () => void; */
};

/* This is the React component which will be rendered on your page */
const MovieCardFinal = ({
  title,
  backgroundImg,
  imdbId,
  isFavorite = false,
}: MovieCardFinalProps) => {
  const toggleFavorite = () => {
    if (!isFavorite) {
      addFavoriteMovie(imdbId);
    }
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
            className="mt-auto"
            src={isFavorite ? "/fav-checked.png" : "/fav-unchecked.png"}
            alt=""
          />
        </button>
        <h3 className="mt-auto">{title}</h3>
      </div>
    </div>
    /* In final, justera CSSen så den inte är så kaos, och lägg till rad med typ rating, år, skådespelare?? genre?? */
  );
};

export default MovieCardFinal;
