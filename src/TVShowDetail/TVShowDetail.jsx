import s from "./style.module.css";
import { FiveStarRating } from "../FiveStarRating/FiveStarRating";

export function TVShowDetail({ tvShow }) {
  const rating = tvShow.vote_average / 2;
  return (
    <div>
      <div className={s.title}> {tvShow.name}</div>
      <div className={s.vote_container}>
        <FiveStarRating rating={rating} />
        <span className={s.vote}>{rating} / 5</span>
      </div>
      <div className={s.description}>{tvShow.overview}</div>
    </div>
  );
}
