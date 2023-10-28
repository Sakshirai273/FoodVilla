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
    //Best place to make an API Call -> because it is after render 
    console.log("ComponentDidMount");
  }
 render(){
  console.log("render");
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
