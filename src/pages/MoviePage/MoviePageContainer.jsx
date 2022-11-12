import { connect } from "react-redux";
import MoviePage from "./MoviePage";

let mapStateToProps = (state) => {
    return {
        moviePage: state.moviePage.moviePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}
const MoviePageContainer = connect(mapStateToProps, mapDispatchToProps)(MoviePage)

export default MoviePageContainer