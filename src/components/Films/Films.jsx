import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Films.scss";
import { BASE_URL_IMG, API_KEY } from "../../api/api";
import axios from 'axios';

function Films({ page, setMoviePage }) {

    const [showLess, setShowLess] = useState(true)
    const overview = page.overview
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
            <NavLink to="/movie" className='films' onClick={() => filmId(page.id)}>
                <img src={BASE_URL_IMG + page.poster_path} />
                <h3>{page.title}</h3>
                <div className='films-info'>
                    <p>release date : {page.release_date}</p>
                    <p>vote average : ⭐{page.vote_average}</p>
                    <p className='show-less'>overview : {showLess ? `${overview.substring(0, maxText)} ... ` : overview}
                        <a href="#" onClick={showLessFunction}>{showLess ? "more" : "less"}</a>
                    </p>
                </div>
            </NavLink>
        </>
    )
}

export default Films