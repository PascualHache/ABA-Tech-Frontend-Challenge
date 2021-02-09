import { GET_FEATURED_PLAYLISTS } from './../utils/constants'

const featuredPlaylistsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_FEATURED_PLAYLISTS:
            return action.playlists;
        default:
            return state;
    }
};
export default featuredPlaylistsReducer;