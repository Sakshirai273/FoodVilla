import { useEffect, useState } from "react"; 

const Profile = (props) => {
    const [count, SetCount] = useState(0);
    const [count2, SetCount2] = useState(0);
    useEffect(() => {
        //API Call
         //console.log("useEffect");
    });
    //console.log("render");
    return(
        <div>
            <h2> Profile component </h2>
            <h3> Name: {props.name}</h3>
            <h3> Count : {count}</h3>
            <button
            onClick={() => {
                SetCount(1);
               // SetCount2(2);
            }}
            >
                Count
            </button>
            </div>
    );
};

export default Profile;