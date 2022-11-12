import React from 'react';
import "./MoviePage.scss";
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { BASE_URL_IMG } from "../../api/api";
import { useNavigate } from "react-router-dom";

function MoviePage({ moviePage }) {
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }
  return (
    <>
      <div className='go-to-back'>
        <BsFillArrowLeftSquareFill onClick={goBack} />
      </div>
      <div className='movie-page'>
        <img src={BASE_URL_IMG + moviePage.poster_path} className="movie-page-img" />
        <div className='movie-page-desc'>
          <h1>{moviePage.title}</h1>
          <p>Overview : <b> {moviePage.overview} </b></p>
          <p>Language : <b> {moviePage.original_language}</b></p>
          <p>Popularity : <b> {moviePage.popularity}</b></p>
          <p>Release date : <b> {moviePage.release_date}</b></p>
          <p>Revenue :<b> {moviePage.revenue}$</b></p>
          <p>Runtime :<b> {moviePage.runtime}</b> </p>
          <p>Status : <b> {moviePage.status}</b></p>
          <p>Vote Average :<b> {moviePage.vote_average}</b></p>
        </div>
      </div>
    </>
  )
}

export default MoviePage