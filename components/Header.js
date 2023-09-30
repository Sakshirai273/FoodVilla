import { useState } from "react";
import logo from "./Images/logo.png";
import { Link } from "react-router-dom"; // used exactly as we use anchor tag , it just does not loads the page 

const LoggedInUser =() =>{
    //API call to check if user is logged in
    return false; //will return login button
}
const Title = () => (
    <a href ="/">
    <img 
       className = "logo"
       alt ="logo"
       src={logo}
    />
    </a>
);

const Header = () => {
const [isLoggedIn , setIsLoggedIn] = useState(false);

    return(
        <div className="header">
           <Title/> 
            <div className="nav-items">
                <ul>
                    <Link to ="/">
                    <li>Home</li>
                    </Link>
                    <Link to ="/about">
                    <li>About</li>
                    </Link>
                    <Link to = "/contact">
                    <li>Contacts</li>
                    </Link>
                    <li>Cart</li> 
                    </ul>
            </div>
            { isLoggedIn?(
                 <button onClick={()=> setIsLoggedIn(false)}> LOGOUT </button> 
            ) : (
            <button onClick={() => setIsLoggedIn(true)}> LOGIN</button>
        )}
        </div>
    );
};

// export default Title;
// export default Header;
//  we can just export default one thing 

// to export multiple things from same file , export using file name in curly braces - also called as named import.
export default Header;

//JS Expressions can be written in u=curly braces in react , but JS statement are not accepted. Property of JSX CURLY BRACES

/*
let a = 10;
console.log(a); // these two are statements

((a= 10), console.log(a)); // this is an expression
*/
//WE CAN DO ALMOST EVERYTHING OF JS IN CURLY BRACKETS , WE JUST HAVE TO WRITE IN THE EXPRESSION KIND OF WAY.


//CDN IS GREAT PLACE TO STORE IMAGES . IT IS VERY FAST . READ ABOUT IT. images are already optimised when put on CDN , can not do it once put. 

//SPA - SINGLE PAGE APPLICATION - does not reload and does not make network calls everytime . 
// There are 2 types of Routing:- 
// 1. Client side routing -> no network calls to fetch anything from server. we will just load a different component. component in already in app.
// 2. Server side routing -> make N/w call , new page comes from server , get the html css js and loads the whole page.
//Link tag is also an anchor tag , link component is also using anchor tag behind the scenes..