import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import {useState} from "react";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

  // Body Component for body section: It contain all restaurant cards
  // We are mapping restaurantList array and passing JSON data to RestaurantCard component as props with unique key as index
const Body = () => {
  // useState: To create a state variable, searchText is local state variable
  //     let searchTxt = "KFC"; //creating variable in JS

  //searchTxt is a local state variable in react
  //returns = [variable name , function to update the variable]
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)} //e.target.value returns the value from list, a JS function on events.
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            // filter the data
            const data = filterData(searchText, restaurants);
            // update the state of restaurants list
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
};
    
export default Body;

//what is state/?
//what is react hooks? -- kind of normal function</>
//what is useState? -- used to create state varibale . it is imported as name import , written by fb developers.
// every component in react maintains a state. So, we can put all the variables in that state. everytime we have to create a local variable we use state in react.