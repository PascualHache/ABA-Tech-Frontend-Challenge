import React from 'react';
import Svg from './../assets/images/hero.svg'
import {FaMoon, FaSun} from 'react-icons/fa';


const Header = () => {
    return (
        <div className="header">
            <img src={Svg} className="hero-img" alt="hero-svg"/>
            <h1 className="title-heading">Your favourite tunes</h1>
            <h2 className="title-heading subtitle">All <span role="img" aria-label=""><FaSun className="sun"/></span> and all <span role="img" aria-label=""><FaMoon className="moon"/></span></h2>
        </div>
    )
};
export default Header;