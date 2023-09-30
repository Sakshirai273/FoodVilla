import {useRouteError} from "react-router-dom"; //gives info about what are the errrors we have . 
const Error = () =>{
    const err = useRouteError();
    // const{status,statusText} = err; //to destructure the error
    console.log(err);
    return(
        <div>
            <h1>OOPS!!!</h1>
            <h2> Something went wrong!</h2>
            <h2> {err.status + ":" + err.statusText}</h2>
        </div>
    );
};

export default Error;