import { CDN_URL } from "../utils/constant";

const RestaurentCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.info ?? {};

  return (
    <div className="res-card">
      <img
        className="res-img"
        alt="meg"
        src={CDN_URL + resData.info.cloudinaryImageId}
      ></img>
      <h3>{name ?? "Unknown Restaurant"}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestaurentCard;
