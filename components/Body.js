import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import {useState} from "react";
const Body =() =>{
//     let searchTxt = "KFC"; //creating variable in JS

//searchTxt is a local state variable in react
//returns = [variable name , function to update the variable]
const[searchText , setSearchText] = useState("KFC"); // to create state variable in REACT

        return (
            <>
            <div className="restaurant-list">
                <input
                type = "text"
                className="search-input"
                placeholder="Search"
                value={searchText}
                onChange={(e) =>{
                    // e.target.value => whatever you write in input
                    setSearchInput("e.target.value") 
                }}
                />
                <button className="search-btn">Search </button>
                </div>
                <div className="restaurant-list">
                    {restaurantList.map(restaurant)  => {
                return (
                <RestaurantCard {...restaurant.data} key={restaurant.data.id}  />
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