import { connect } from 'react-redux';
import { newPageAC, setPageAC } from '../../redux/filmpageReducer';
import { setMoviePageAC } from '../../redux/moviepageReducer';
import HomePage from './HomePage';


const mapStateToProps = (state) => {
    return {
        page: state.filmPage.results,
        pageNumber: state.filmPage.page
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPage: (setPage) => {
            dispatch(setPageAC(setPage))
        },
        newPage: (newPage) => {
            dispatch(newPageAC(newPage))
        },
        setMoviePage: (moviePage) => {
            dispatch(setMoviePageAC(moviePage))
        }
    }
}

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage);
export default HomePageContainer