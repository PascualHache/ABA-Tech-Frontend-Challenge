import React, { useEffect } from 'react';
import Header from './Header';
import SideMenu from './SideMenu';
import CoversCarousel from './CoversCarousel';
import { useDispatch } from "react-redux";
import { getNewReleases, getFeaturedPlaylists, getCategories } from './../actions/result';

const Main = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNewReleases())
        dispatch(getFeaturedPlaylists())
        dispatch(getCategories())
    }, []);


    const handleNewReleases = () => {
        dispatch(getNewReleases())
    }

    const handleFeatured = () => {
        dispatch(getFeaturedPlaylists())
    }

    const handleCategories = () => {
        dispatch(getCategories())
    }

    return (
        <div className="main">
            <SideMenu />
            <div className="rightSide">
                <Header />
                <div className="content-view"><div>Main Page</div>
                    <CoversCarousel />
                    <div onClick={handleNewReleases}>New Releases</div>
                    <div onClick={handleFeatured}>Featured Playlists</div>
                    <div onClick={handleCategories}>Categories</div>
                </div>
            </div>
        </div>)
};
export default Main;