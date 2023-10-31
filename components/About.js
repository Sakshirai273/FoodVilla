import React from 'react'
import {Outlet} from "react-router-dom";
import ProfileFunctionalComponent from './Profile';
import Profile from './ProfileClass';
import { Component } from 'react';

class About extends Component{
  constructor(props){
    super(props);
   
    console.log("Parentconstructor");
  }
 componentDidMount(){

  
  }
 render(){
  console.log("parent - render");
  return (
    <div>
      <h1>ABOUT US PAGE</h1>
      <p> 
        This is namaste react course , finding path ch-7
        </p>
        <Profile name = {"SakshiClass"} xyz = "abc"/>
    </div>
  );
 }
}


export default About;

// using functional components
const About2 = () => {
  return (
    <div>
      <h1>ABOUT US PAGE</h1>
      <p> 
        This is namaste react course , finding path ch-7
        </p>
        <ProfileFunctionalComponent name = {"Sakshi"} />
        <Profile name = {"SakshiClass"} xyz = "abc"/>
    </div>
 );
};


/**
 * Parent Constructor
 * Parent Render 
 * First Child - constructor
 * First child - Render 
 * Second Child - constructor 
 * Second Child - Render
 * PHASE WHERE REACT WILL UPDATE THE DOM.
 * DOM updated for children
 * First Child - componentDidMount
 * Second Child - componentDidMount
 */

//first phase is render phase , second phase is commit phase . React first completes the render phase which includes constructor and render method . commit is where the react is modifying the DOM. componentDidMount is called in commit phase. Render is fast whereas commit is slow