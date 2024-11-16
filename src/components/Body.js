import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const { loggedInUser, setUserName } = useContext(UserContext);

  const RestaurantPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const value = await data.json();

    setListOfRestaurants(
      value?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      value?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!!. Please check your internet connection{" "}
      </h1>
    );

  if (filteredRestaurant.length === 0) {
    return (
      <div className="text-center mt-52 text-lg">
        <div>"Serving you something irresistibly delicious! 😉</div>
        <div>
          If the restaurant doesn't show up, give it a quick refresh—we'll make
          it worth the wait!"
        </div>
      </div>
    );
  }

  return (
    <div className="body bg-opacity-80">
      <div className="flex m-4 justify-evenly">
        <div className="search p-3">
          <input
            type="text"
            placeholder="Search a Restaurant...."
            data-testid="searchInput"
            className="w-96  px-5 py-[6px] rounded-l-lg border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-5 py-[7px] bg-yellow-600 rounded-r-lg hover:bg-yellow-700"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info?.name?.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="search px-3 flex items-center">
          <button
            className="px-4 py-[7px] bg-yellow-600 rounded-md shadow-lg hover:bg-yellow-700"
            onClick={() => {
              const filteredList = filteredRestaurant.filter(
                (res) => res?.info?.avgRating > 4.2
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        {/* <div className="mt-8 ml-4">
          <label>Username : </label>
          <input
            className="border border-black px-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div> */}
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((res) => (
          <Link
            key={res?.info?.parentId}
            to={"/restaurant/" + res.info.id}
            style={{ textDecoration: "none" }}
          >
            {res.info.avgRating > 4.5 ? (
              <RestaurantPromoted resData={res?.info} />
            ) : (
              <RestaurantCard resData={res?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
