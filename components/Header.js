import logo from "./Images/logo.png";

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

// export default Title;
// export default Header;
//  we can just export default one thing 

// to export multiple things from same file , export using file name in curly braces - also called as named import.
export default Header;