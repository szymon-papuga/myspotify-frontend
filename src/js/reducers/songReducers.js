import { SELECT_SONG, REQUEST_SONGS, RECEIVE_SONGS } from '../actions/songActions';
import { SIGNAL_ERROR } from '../actions/genericActions';

export function selectedSong(state = {}, action) {
    return (action.type === SELECT_SONG) ? action.song : state;
}

const initialState = {
    songResources: [],
    isFetching: false,
    errorMsg: ''
};

// might be helpful in the future
export function songs(state = initialState, action) {
    switch (action.type) {
        case REQUEST_SONGS:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_SONGS:
            return {
                ...state,
                songResources: action.songs,
                isFetching: false
            };
        case SIGNAL_ERROR:
            return {
                ...state,
                isFetching: false,
                errorMsg: action.errorMsg
            };
        default:
            return state;
    }
}
