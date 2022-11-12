import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import "./Films.scss";
import { BASE_URL_IMG, API_KEY } from "../../api/api";
import axios from 'axios';

function FilmsFilter({ filter, setMoviePage }) {
    const [showLess, setShowLess] = useState(true)
    const overview = filter.overview
    const maxText = 29
    const showLessFunction = (e) => {
        e.preventDefault()
        setShowLess(!showLess)
    }

    const filmId = (id) => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
            .then(response => setMoviePage(response.data))
    }
    return (
        <>
            <NavLink className='films' to="/movie" onClick={() => filmId(filter.id)}>
                <img src={BASE_URL_IMG + filter.poster_path} />
                <h3>{filter.title}</h3>
                <div className='films-info'>
                    <p>release date : {filter.release_date}</p>
                    <p>vote average : ⭐{filter.vote_average}</p>
                    <p className='show-less'>overview : {showLess ? `${overview.substring(0, maxText)} ... ` : overview}
                        <a href="#" onClick={showLessFunction}>{showLess ? "more" : "less"}</a>
                    </p>
                </div>
            </NavLink>
        </>
    )
}

export default FilmsFilter