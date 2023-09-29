import { useState } from "react";
import logo from "./Images/logo.png";

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
                    <li>Home</li>
                    <li>About</li>
                    <li>Contacts</li>
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
//WE CAN DO ALMOSTT EVERYTHING OF JS IN CURLY BRACKETS , WE JUST HAVE TO WRITE IN THE EXPRESSION KIND OF WAY.