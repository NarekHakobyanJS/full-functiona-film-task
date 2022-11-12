const FILTER_GENRES = "FILTER_GENRES";
const FILTER_PAGE = "FILTER_PAGE";
const SET_NEW_PAGE = "SET_NEW_PAGE"
let initialState = {
    page: 1,
    results: [],
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_GENRES:
            return {
                ...state,
                results: action.filterPage
            }
        case FILTER_PAGE:
            return {
                ...state,
                results: state.results.filter(res => res.id !== action.id)
            }
        case SET_NEW_PAGE: {
            return {
                ...state,
                page: state.page + 1,
                results: action.newPage,
            }
        }
        default:
            return state
    }
}

export const filterPageAC = (filterPage) => ({ type: FILTER_GENRES, filterPage })
export const filterPageIdAC = (id) => ({ type: FILTER_PAGE, id })
export const newPageAC = (newPage) => ({ type: SET_NEW_PAGE, newPage })
export default filterReducer