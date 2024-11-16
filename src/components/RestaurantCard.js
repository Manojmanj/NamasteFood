import { CDN_URL } from "../utils/constantLinks";

const RestaurantCard = (props) => {
  const { resData = {} } = props;

  // console.log(resData);
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData;

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] h-[300px] rounded-lg bg-white shadow-2xl hover:transform transition-transform duration-100 hover:scale-98"
    >
      <div className="py-0">
        <img
          className="w-[100%] h-[140px] rounded-md object-cover"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div>
        <h3 className="font-bold pt-2 text-md">{name}</h3>
        <div className="text-sm pb-2">
          {Array.isArray(cuisines) ? cuisines.slice(0, 4).join(", ") : ""}
        </div>
      </div>
      <div className="flex pt-2">
        <div className="bg-customGreen rounded-md text-sm p-1 text-white font-bold">
          <h4>☆ {avgRating}</h4>
        </div>
        <h4 className="pl-4">{costForTwo}</h4>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white px-2 ml-3 rounded-md">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
