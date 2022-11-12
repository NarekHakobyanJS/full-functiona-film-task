const SET_GENRES = "SET_GENRES";

let initialState = {
    genres: []
}
const navbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GENRES:
            return {
                ...state,
                genres: action.genre
            }
        default:
            return state
    }
}

export const setGenresAC = (genre) => ({ type: SET_GENRES, genre })

export default navbarReducer;