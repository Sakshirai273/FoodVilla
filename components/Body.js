import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import {useState , useEffect} from "react";
import shimmer from "./shimmer";


function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
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
    const [allRestaurants , setAllRestaurants] = useState([ ]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantList);
   
      // useEffect(()=>{
      //   console.log("call when dependency is changed")
      // },[searchText]) 
// pass a dependency array if we dont want to call it again . two paramaters are given , callback function and dependency array
//useEffect is now dependent on searchText and the function is called when dependency is changed
//it will be called once if dependency array is empty. --> once after render
// if dependency array is searchText -> it wil be called once after initial render , and everytime after re render(when my searchtext changes)
   
useEffect(() => {
  //API Call
  getRestaurants();
},[]);

async function getRestaurants(){
  const data = await fetch();
  const json = await data.json();
  console.log(json);
  //OPERATIONAL LOADING
  setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
}

console.log("render");

//not rendering component -> early return
if(!allRestaurants ) return null;

if(filteredRestaurants?.length === 0) return <h1> NO restraunt match your filter!</h1>;


//ternary operation to operate shimmer UI 
  return (allRestaurants.length === 0)?  (
    <shimmer/>
  ) :(
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
            const data = filterData(searchText, allRestaurantsrestaurants);
            // update the state of restaurants list
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key = {restaurant.data.id} />
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