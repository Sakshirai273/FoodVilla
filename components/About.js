import React from 'react'
import {Outlet} from "react-router-dom";
import ProfileFunctionalComponent from './Profile';
import Profile from './ProfileClass';

const About = () => {
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

export default About;