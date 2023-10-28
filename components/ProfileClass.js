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
     this.state  = {
        count : 0,
        count2 : 0,
     };
     console.log("Constructor");
} 
//class based components have life cycle methods.
//CALLING SEQUENCE :- Constructor -> component renders  -> componentdidmount
//API CALLS are made under component did mount because the component is needed to be rendered first
  componentDidMount() {
    //API Calls
    console.log("componentDidMount");
  }


     render(){
        const {count} = this.state;
        return (
            <div>
        <h1> Profile Class Component</h1>
        <h2>Name: {this.props.name} </h2>
        <h2>XYZ: {this.props.xyz} </h2>
        <h2> Count : {count}</h2>
        <button
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
        </button>
        </div>
        );
     }
}

export default Profile;