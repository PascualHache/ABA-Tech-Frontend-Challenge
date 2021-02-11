import React from 'react';
import Svg from './../assets/images/avatar.svg';
import {FaHeadphonesAlt, FaSearch, FaHeart, FaPlayCircle} from 'react-icons/fa';
import {RiMenu4Line} from 'react-icons/ri';


export default function SideMenu() {
    return (
        <div className="side-menu">
            <div className="avatarBox">
                <img src={Svg} className="avatar" alt="avatar" />
                <span>Bob Smith</span>
            </div>
            <a href="/#" ><FaHeadphonesAlt/><div className="menu-text">Discover</div></a>
            <a href="/#"><FaSearch/><div className="menu-text">Search</div></a>
            <a href="/#"><FaHeart/><div className="menu-text">Favourites</div></a>
            <a href="/#"><FaPlayCircle/><div className="menu-text">Playlists</div></a>
            <a href="/#"><RiMenu4Line/><div className="menu-text">Charts</div></a>
        </div>
    )
}
