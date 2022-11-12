import React from "react";
import { connect } from "react-redux";
import { filterPageAC, filterPageIdAC } from "../../redux/filterReducer";
import { setGenresAC } from "../../redux/navbarReducer";
import NavBar from "./NavBar";

let mapStateToProps = (state) => {
    return {
        genres: state.navbar.genres,
        filterID: state.filterPage.results.id
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setGenres: (genres) => {
            dispatch(setGenresAC(genres))
        },
        filterPage: (filterPage) => {
            dispatch(filterPageAC(filterPage))
        },
        filterPageId: (id) => {
            dispatch(filterPageIdAC(id))
        }
    }
}
const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar)
export default NavBarContainer;