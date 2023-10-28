const Shimmer = () =>{
    // return <h1> shimmer UI Loading.....</h1>;
    return(
        <div className="restaurant-list">
            {Array(10).fill("")
            .map((e,index)=> (
                <div key = {index} className="shimmer-card"></div>
     ))}
    
        </div>
        );
    };

export default Shimmer;

//for every small thing , dont use npm packages . 
// we can use "FORMIK" to make forms in react easily.