const SET_MOVIE_PAGE = "SET_MOVIE_PAGE"

let initalState = {
    moviePage: {}
}
const moviepageReducer = (state = initalState, action) => {
    switch (action.type) {
        case SET_MOVIE_PAGE:
            return {
                ...state,
                moviePage: action.setMovie
            }
        default:
            return state
    }
}

export const setMoviePageAC = (setMovie) => ({ type: SET_MOVIE_PAGE, setMovie })
export default moviepageReducer;