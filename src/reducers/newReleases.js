import { GET_NEW_RELEASES } from '../utils/constants';

const newReleasesReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_NEW_RELEASES:
            return action.releases;
        default:
            return state;
    }
};
export default newReleasesReducer;