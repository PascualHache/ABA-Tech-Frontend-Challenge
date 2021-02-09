import config from '../config';
import { get } from '../utils/api';
import {
    GET_NEW_RELEASES,
    GET_FEATURED_PLAYLISTS,
    GET_CATEGORIES
} from '../utils/constants';

const { newReleaseUrl, featuredPlaylistsUrl, categoriesUrl } = config.api;

export const getNewReleases = () => (dispatch) => {
    return get(newReleaseUrl).then(
        (response) => {
            dispatch({
                type: GET_NEW_RELEASES,
                releases: response
            });
        })
}

export const getFeaturedPlaylists = () => (dispatch) => {
    return get(featuredPlaylistsUrl).then(
        (response) => {
            dispatch({
                type: GET_FEATURED_PLAYLISTS,
                playlists: response
            });
        })
}

export const getCategories = () => (dispatch) => {
    return get(categoriesUrl).then(
        (response) => {
            dispatch({
                type: GET_CATEGORIES,
                categories: response
            });
        })
}
