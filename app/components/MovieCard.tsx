/* eslint-disable @next/next/no-img-element */
/* This is the props / attributes you will be able to send to the component*/
type MovieProps = {
  title: string;
  backgroundImg: string;
};

/* This is the React component which will be rendered on your page */
export const Movie = ({ title, backgroundImg }: MovieProps) => {
  /* title and background is now available to use within your component */
  return <></>;
};

/* This is the props / attributes you will be able to send to the component*/
type MovieCardFinalProps = {
  title: string;
  backgroundImg: string;
  isFavorite?: boolean;
  /* onFavoriteClick: () => void; */
};

/* This is the React component which will be rendered on your page */
const MovieCardFinal = ({
  title,
  backgroundImg,
  isFavorite = false,
}: MovieCardFinalProps) => {
  return (
    <div className="relative h-[var(--imgHeight)] w-[var(--imgWidth)]">
      <img
        src={backgroundImg}
        alt=""
        className="w-[var(--imgWidth)] h-[var(--imgHeight)] rounded-[var(--border-radius)] absolute top-0 right-0"
      />
      <div className="rounded-[var(--border-radius)] absolute w-full h-full bg-gradient-to-b from-[rgba(33,33,33,0.2)] to-[rgba(0,0,0,1)] text-white flex flex-col p-3 box-border ">
        <button>
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
