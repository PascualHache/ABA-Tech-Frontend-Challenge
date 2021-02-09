import React, { useEffect } from 'react';
import Header from './Header';
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
        <>
            <Header />
            <div >Main Page</div>
            <div onClick={handleNewReleases}>New Releases</div>
            <div onClick={handleFeatured}>Featured Playlists</div>
            <div onClick={handleCategories}>Categories</div>
        </>)
};
export default Main;