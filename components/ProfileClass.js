//class based component is a class at the end of the day.
//cannot create  a class base component without a 'render' method. it returns some JSX.

// extends is used to inherit some properties from react component in the class.
//whenever there is state or props change , react re renders the component 
import React from "react";

class Profile extends React.Component {


    //WHY DO WE DO THIS?
   // --> all the state variables in class based components are written as a part of one Object.
    constructor(props){
        super(props);
     //Create state
     this.state = {
      userInfo: {
        name : "Dummy Name ",
        location :  "Dummy Location",
      },
    };
    // console.log("child Constructor"+ this.props.name);
} 
//class based components have life cycle methods.
//CALLING SEQUENCE :- Constructor -> component renders  -> componentdidmount
//API CALLS are made under component did mount because the component is needed to be rendered first
 async componentDidMount() {
    //API Calls
    const data = await fetch("https://api.github.com/users/Sakshirai273");
    const json  = await data.json();
    console.log(json);
    this.setState({
      userInfo : json,
    });
    this.setInterval(() => {
      console.log("NAMASTE REACT OP");
 },1000);
    console.log("Child - componentDidMount");
    console.log("Parent ComponentDidMount");
    console.log("Child componentDidMount"+ this.props.name);
  }

componentDidUpdate(){
   console.log("Component did update"); //mount will be called after first render and update will be called after every render.
}

componentWillUnmount(){
    //proper use case ofthis method - clean the code
    clearInterval(this.timer);
   console.log(" component will unmount "); // 
}


     render(){
        const {count} = this.state;
        console.log("child - render" + this.props.name);
        return (
            <div>
        <h1> Profile Class Component</h1>
        {/* <h2>Name: {this.props.name} </h2>
        <h2>XYZ: {this.props.xyz} </h2> */}
        <img src = {this.state.userInfo.avatar_url}/>
        <h2>Name: {this.state.userInfo.name} </h2>
        <h2>Location: {this.state.userInfo.location} </h2>
        {/* <h2> Count : {count}</h2> */}
        {/* <button
         onClick={() => {
        // WE DO NOT MUTATE STATE DIRECTLY
         //never do this.state = something
           // this.state.count = 1
           this.setState({
           // count: 1,
            count2 : 1,
           });
        }} 
        > 
        SetCount
        </button> */}
        </div>
        );
     }
}

export default Profile;

/**
 * SEQUENCE OF ELEMENTS CALLED:- (REACT LIFECYCLE)
 * Parent constructor
 * parent render 
 * child constructor
 * child render 
 * 
 * DOM IS UPDATED - COMMIT PHASE 
 * API CALL
 * Parent componentDidMount 
 * json is logged in console 
 * child componentDidMount
 * child render  - re render cycle which is known as UPDATING.
 * Parent componentDidMount - it should have been printed here but because of async function it will be rendered before.
 */