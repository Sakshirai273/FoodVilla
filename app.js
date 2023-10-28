import React from "react";
import  ReactDOM from "react-dom/client";

//Default import 
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
//import { IMG_CDN_URL } from "./constants";
import { createBrowserRouter , RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Error from "./Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";


const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      {/*OUTLET : -
       <About/>
      <Body /> */}
      <Outlet/>
      <Footer />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path : "/",
    element: <AppLayout/>,
    errorElement: <Error/>,
  children: [
    {
      path: "/",
      element:<Body/>,
    },
    {
      path: "/about",
      element:<About/>,
    },
    {
      path: "/contact",
      element:<Contact/>,
    },
    {
      path: "/restaurant/:resId",
      element:<RestaurantMenu/>,
    },
  ],
  },
]); 


// if we want to have header and footer intact while we are even on about page  we will have to make it a children of applayout. All the children will go into the outlet according to the route.
// it runs in a sequence so define applayout before using it in approuter function.
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<AppLayout />);
root.render(<RouterProvider router =  {appRouter}/>) //like props // react router dom was developed by remix 

//named import
// import { Title } from "./components/Header";

 /**
              Header 
                -Logo(title)
                - nav items(right side)
                - Cart
              Body 
                 -Search bar
                 -Restaurant card
                    -Image
                    -Name 
                    -Rating
                    -Cuisines
              Footer
                - Links
                - Copyright
            */

// const styleObj = {
//     backgroundColor:"red",
// }
//Inline styling in React 
// const jsx = (
//     <div
//     className="jsx"
//     style ={{
//         backgroundColor:"yellow",
//     }}
//     >
//     <h1> JSX</h1>
//     <h1> Second JSX</h1>
//     </div>
// );

// //functional components
// const Title = () => (
//     <a href ="/">
//     <img 
//        className = "logo"
//        alt ="logo"
//        src = "E:\WEB DEV\NAMASTE REACT\NR - code practice\FoodVilla\logo.png"
//     />
//     {
//     /*  <h1 id = " title" key = "h2">
//     Food Villa
//      </h1>    --> we can have only one parent element(root) in the JSX . React offers "React.Fragment" to solve this problem . we can even use <> </> empty tags instead of react fragment for shortcut*/
//     }
//     </a>
// );

//composing components 



// const Header = () => {
//     return(
//         <div className="header">
//            <Title/> 
//             <div className="nav-items">
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Contacts</li>
//                     <li>Cart</li> 
//                     </ul>
//             </div>
//         </div>
//     );
// };

//config Driven UI
  // const RestaurantCard = ({
  //   cloudinaryImageId,
  //   name,
  //   cuisines,
  //   lastMileTravelString,
  // }) => {
  //   return (
  //     <div className="card">
  //       <img src={
  //            "https://b.zmtcdn.com/data/pictures/chains/2/18549832/8c49ba335683507ba6ddee2dc84966e8_o2_featured_v2.jpg?output-format=webp"
  //           + cloudinaryImageId
  //           } />
  //       <h2>{name}</h2>
  //       <h5>{cuisines.join(", ")}</h5>
  //       <h6>{area}</h6>
  //       <span>
  //         <h4
  //           style={
  //             avgRating < 4 ? { backgroundColor: "red" } : { color: "white" }
  //           }
  //         >
  //           <i className="fa-solid fa-star"></i>
  //           {avgRating}
  //         </h4>
  //         <h4>{lastMileTravelString}</h4>
  //         <h4>{costForTwoString}</h4>
  //       </span>
  //     </div>
  //   );
  // };
  
// const config = [
// {
//     type: "carousel",
// cards:[
//     {
//         offerName: "50% off"
//     },
//     {
//         offerName:"NO delivery charge"
//     }
// ]
// },

//         type: "restaurants",
//     cards: [
//         {
//             name : "Burger King",
//             image: "https://b.zmtcdn.com/data/pictures/chains/2/18549832/8c49ba335683507ba6ddee2dc84966e8_o2_featured_v2.jpg?output-format=webp",
//             cuisines: ["Burger" , "Americano"],
//             rating: "4.2",
//             },
//             {
//                 name : "KFC",
//                 image: "https://b.zmtcdn.com/data/pictures/chains/2/18549832/8c49ba335683507ba6ddee2dc84966e8_o2_featured_v2.jpg?output-format=webp",
//                 cuisines: ["Burger" , "Americano"],
//                 rating: "4.2",
//                 },
//     ]
//     },
// ] 
// const restaurantList = [{
//     name : "Burger King",
//     image: "https://b.zmtcdn.com/data/pictures/chains/2/18549832/8c49ba335683507ba6ddee2dc84966e8_o2_featured_v2.jpg?output-format=webp",
//     cuisines: ["Burger" , "Americano"],
//     rating: "4.2",
// },
// {
// name : "Burger King",
// image: "https://b.zmtcdn.com/data/pictures/chains/2/18549832/8c49ba335683507ba6ddee2dc84966e8_o2_featured_v2.jpg?output-format=webp",
// cuisines: ["Burger" , "Americano"],
// rating: "4.2",
// },
// {
// name : "Burger King",
// image: "https://b.zmtcdn.com/data/pictures/chains/2/18549832/8c49ba335683507ba6ddee2dc84966e8_o2_featured_v2.jpg?output-format=webp",
// cuisines: ["Burger" , "Americano"],
// rating: "4.2",
// },
// {
//     name : "Burger King",
//     image: "https://b.zmtcdn.com/data/pictures/chains/2/18549832/8c49ba335683507ba6ddee2dc84966e8_o2_featured_v2.jpg?output-format=webp",
//     cuisines: ["Burger" , "Americano"],
//     rating: "4.2",
//     }
// ];
// const RestaurantCard = () =>{
//     return (
//         <div className="card">
//             <img src = {burgerKing.image} />
//             <h2> {burgerKing.name}</h2>
//             <h3> {burgerKing.cuisines.join(",")}</h3>
//             <h4> {burgerKing.rating} stars</h4>
//         </div>
//     );
// }
//  const Header =() =>{
//     return (
//     <h4>Header</h4>
//     )
//  }
//  const Body =() =>{
//     return (
//     <div className = "restaurant-list">
//         <RestaurantCard/>
//         <RestaurantCard/>
//         <RestaurantCard/>
//         <RestaurantCard/>
//         <RestaurantCard/>
//         <RestaurantCard/>
//         <RestaurantCard/>
//         <RestaurantCard/>
//         <RestaurantCard/>
//         <RestaurantCard/>
//         <RestaurantCard/>
//         <RestaurantCard/>
//         </div>
//     );
//  };
//  const Footer =() =>{
//     return 
//     <h4>Footer</h4>;
// };

 