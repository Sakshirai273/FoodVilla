import React from "react";
import  ReactDOM, {createRoot} from "react-dom/client";
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

//functional components
const Title = () => (
    <a href ="/">
    <img 
       className = "logo"
       alt ="logo"
       src = "E:\WEB DEV\NAMASTE REACT\NR - code practice\FoodVilla\logo.png"
    />
    {
    /*  <h1 id = " title" key = "h2">
    Food Villa
     </h1>    --> we can have only one parent element(root) in the JSX . React offers "React.Fragment" to solve this problem . we can even use <> </> empty tags instead of react fragment for shortcut*/
    }
    </a>
);

//composing components 



const Header = () => {
    return(
        <div className="header">
           <Title/> 
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contacts</li>
                    <li>Cart</li> 
                    </ul>
            </div>
        </div>
    );
};

//config Driven UI
const config = [
{
    type: "carousel",
cards:[
    {
        offerName: "50% off"
    },
    {
        offerName:"NO delivery charge"
    }
]
},

        type: "restaurants",
    cards: [
        {
            name : "Burger King",
            image: "https://b.zmtcdn.com/data/pictures/chains/2/18549832/8c49ba335683507ba6ddee2dc84966e8_o2_featured_v2.jpg?output-format=webp",
            cuisines: ["Burger" , "Americano"],
            rating: "4.2",
            },
            {
                name : "KFC",
                image: "https://b.zmtcdn.com/data/pictures/chains/2/18549832/8c49ba335683507ba6ddee2dc84966e8_o2_featured_v2.jpg?output-format=webp",
                cuisines: ["Burger" , "Americano"],
                rating: "4.2",
                },
    ]
    },
] 
const restaurantList = [{
    name : "Burger King",
    image: "https://b.zmtcdn.com/data/pictures/chains/2/18549832/8c49ba335683507ba6ddee2dc84966e8_o2_featured_v2.jpg?output-format=webp",
    cuisines: ["Burger" , "Americano"],
    rating: "4.2",
},
{
name : "Burger King",
image: "https://b.zmtcdn.com/data/pictures/chains/2/18549832/8c49ba335683507ba6ddee2dc84966e8_o2_featured_v2.jpg?output-format=webp",
cuisines: ["Burger" , "Americano"],
rating: "4.2",
},
{
name : "Burger King",
image: "https://b.zmtcdn.com/data/pictures/chains/2/18549832/8c49ba335683507ba6ddee2dc84966e8_o2_featured_v2.jpg?output-format=webp",
cuisines: ["Burger" , "Americano"],
rating: "4.2",
},
{
    name : "Burger King",
    image: "https://b.zmtcdn.com/data/pictures/chains/2/18549832/8c49ba335683507ba6ddee2dc84966e8_o2_featured_v2.jpg?output-format=webp",
    cuisines: ["Burger" , "Americano"],
    rating: "4.2",
    }
];
const RestaurantCard = () =>{
    return (
        <div className="card">
            <img src = {burgerKing.image} />
            <h2> {burgerKing.name}</h2>
            <h3> {burgerKing.cuisines.join(",")}</h3>
            <h4> {burgerKing.rating} stars</h4>
        </div>
    );
}
//  const Header =() =>{
//     return (
//     <h4>Header</h4>
//     )
//  }
 const Body =() =>{
    return (
    <div class = "restaurant-list">
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        </div>
    );
 };
 const Footer =() =>{
    return 
    <h4>Footer</h4>;
};

    const AppLayout = () =>{
        return (
            <React.Fragment>
                <Header/>
                <Body/>
                <Footer/>
                </React.Fragment>
        );
    }
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<AppLayout/>);