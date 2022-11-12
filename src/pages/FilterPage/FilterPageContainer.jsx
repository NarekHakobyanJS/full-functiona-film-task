import { connect } from "react-redux";
import FilterPage from "./FilterPage";
import { newPageAC } from "../../redux/filterReducer";
import { setMoviePageAC } from '../../redux/moviepageReducer'

let mapStateToProps = (state) => {
    return {
        filter: state.filterPage.results,
        pageNumber: state.filterPage.page
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setMoviePage: (moviePage) => {
            dispatch(setMoviePageAC(moviePage))
        },
        newPage: (newPage) => {
            dispatch(newPageAC(newPage))
        },
    }
}
const FilterPageContainer = connect(mapStateToProps, mapDispatchToProps)(FilterPage);
export default FilterPageContainer