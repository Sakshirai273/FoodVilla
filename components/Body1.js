import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import {useState , useEffect} from "react";
import Shimmer from "./Shimmer";
//import { swiggy_api_URL } from "../constants";




function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
}

 

  // Body Component for body section: It contain all restaurant cards
  // We are mapping restaurantList array and passing JSON data to RestaurantCard component as props with unique key as index
  // useState: To create a state variable, searchText is local state variable
  // let searchTxt = "KFC"; //creating variable in JS

  //searchTxt is a local state variable in react
  //returns = [variable name , function to update the variable]
  const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
  
     
      // useEffect(()=>{
      //   console.log("call when dependency is changed")
      // },[searchText]) 
// pass a dependency array if we dont want to call it again . two paramaters are given , callback function and dependency array
//useEffect is now dependent on searchText and the function is called when dependency is changed
//it will be called once if dependency array is empty. --> once after render
// if dependency array is searchText -> it wil be called once after initial render , and everytime after re render(when my searchtext changes)
// if there's no dependency array , then the use effect function will be called after each render. it is its default behaviour.
useEffect(() => {
  //API Call
  getRestaurants();
},[]);

async function getRestaurants() {
  const data = await fetch(
     // update the state variable restaurants with Swiggy API data
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"
  );

  const json = await data.json();
  console.log(json);
  //OPERATIONAL LOADING
  // setAllRestaurants(json.data.cards[2].data.data.cards);
  setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
}

  // * Conditional Rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

 
console.log("render");

//not rendering component -> early return(allRestaurants is empty don't render restaurants cards)
if(!allRestaurants ) return null;

if(filteredRestaurants?.length === 0) 
return <h1> NO restraunt match your filter!</h1>;


return allRestaurants?.length === 0 ? (
  <shimmer />
) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
}} //e.target.value returns the value from list, a JS function on events.
       />
        <button
          className="search-btn"
          onClick={() => {
            // filter the data
             const data = filterData(searchText, allRestaurants);
            // // update the state of restaurants list
            setFilteredRestaurants(data);
            //searchData(searchText, allRestaurants);
          }}
        >
          Search
        </button>
      </div>
      
      {/* //ternary operation to operate shimmer UI  */}
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
           // <RestaurantCard {...restaurant?.data} key = {restaurant?.data?.id} />
           <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
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

//CONDITIONAL RENDERING
//if restraunt is empty  => shimmer UI
// if restraunt has data => actual data UI


// never create a component inside component . - render process will be done many times.
// NEVER EVER WRITE useState inside a 'if' condition. inconsistency occurs . we should exactly know concrete variables.
// we should never write useState inside for loop. It should exactly know how many variables needed.
// nevere use useState outside functional component. it is not needed