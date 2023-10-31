import { useEffect, useState } from "react"; 

const Profile = (props) => {
    const [count, setCount] = useState(0);
   // const [count2, SetCount2] = useState(0);
    useEffect(() => {
        //API Call
        const timer = setInterval(() => {
            console.log("NAMASTE REACT OP ");
          }, 1000);
         console.log("useEffect");
    //console.log("render");
    
    return () => {
    clearInterval(timer);
        console.log("useEffect Return");
    };
    }, []);
    console.log("render");
    return(
        <div>
            <h2> Profile component </h2>
            <h3> Name: {props.name}</h3>
            <h3> Count : {count}</h3>
            <button
            onClick={() => {
                setCount(1);
               // SetCount2(2);
            }}
            >
                Count
            </button>
            </div>
    );
};

export default Profile;