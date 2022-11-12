const SET_PAGE = "SET_PAGE";
const SET_NEW_PAGE = "SET_NEW_PAGE"
let initialState = {
    page: 1,
    results: [],
    total_pages: 35836,
    total_results: 716714
}
const filmpageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PAGE:
            return {
                ...state,
                results: action.setPage
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

export const setPageAC = (setPage) => ({ type: SET_PAGE, setPage })
export const newPageAC = (newPage) => ({ type: SET_NEW_PAGE, newPage })
export default filmpageReducer