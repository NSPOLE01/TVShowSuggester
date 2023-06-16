import { StarFill, StarHalf, Star } from "react-bootstrap-icons";
export function FiveStarRating({ rating }) {
  const starList = [];
  const starFillCount = Math.floor(rating);
  const hasHalf = rating - parseInt(rating) >= 0.5;
  const emptyCount = 5 - starFillCount - (hasHalf ? 1 : 0);
  for (let i = 0; i < starFillCount; i++) {
    starList.push(<StarFill key={"star-fill" + i} />);
  }
  if (hasHalf) {
    starList.push(<StarHalf key={"star-half"} />);
  }
  for (let j = 0; j < emptyCount; j++) {
    starList.push(<Star key={"star-empty" + j} />);
  }

  return <div>{starList}</div>;
}
