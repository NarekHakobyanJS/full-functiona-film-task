import React, { useEffect } from 'react';
import { API_KEY } from "../../../api/api";
import axios from "axios"
import { NavLink } from 'react-router-dom';

function Nav({ genre, filterPage, filterID, filterPageId }) {
    let genId = genre.id
    let pageNumber = 1

    const filterGen = (id) => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${genId}&page=${pageNumber}`)
            .then(response => filterPage(response.data.results))
        filterPageId(id)
    }
    return (
        <nav className='nav'>
            <NavLink className='nav-link' onClick={() => filterGen(genre.id)} to='/filter'>
                {genre.name}
            </NavLink >
        </nav>
    )
}

export default Nav