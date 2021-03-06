import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import SideMenu from './SideMenu';
import Player from './Player';
import CoversCarousel from './content/CoversCarousel';
import { getNewReleases, getFeaturedPlaylists, getCategories } from './../actions/result';

const Main = (props) => {

    useEffect(() => {
        props.fetchReleases();
        props.fetchFeatured();
        props.fetchCategories();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="main">
            <SideMenu userName={"Bob Smith"}/>
            <div className="rightSide">
                <Header />
                <div className="content-view">
                    <CoversCarousel data={props.newReleases?.albums?.items} title="RELEASED THIS WEEK" type={"releases"} />
                    <CoversCarousel data={props.featuredPlaylists?.playlists?.items} title="FEATURED PLAYLISTS" type={"featured"} />
                    <CoversCarousel data={props.categories.categories?.items} title="BROWSE" type={"categories"} />
                </div>
                <Player track={"Nothing's playing"}/>
            </div>
        </div>)
};

const mapStateToProps = (state) => {
    return {
        newReleases: state.newReleases,
        featuredPlaylists: state.featuredPlaylists,
        categories: state.categories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchReleases: () => dispatch(getNewReleases()),
        fetchFeatured: () => dispatch(getFeaturedPlaylists()),
        fetchCategories: () => dispatch(getCategories()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);