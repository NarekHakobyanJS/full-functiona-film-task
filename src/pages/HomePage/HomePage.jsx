import React, { useEffect } from 'react';
import axios from "axios";
import { API_KEY } from '../../api/api';
import "./HomePage.scss";
import Films from '../../components/Films/Films';

function HomePage({ page, setPage, pageNumber, newPage, setMoviePage }) {

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US`)
      .then(response => setPage(response.data.results))
  }, [])

  const showMore = () => {
    axios.get(` https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=${pageNumber}`)
      .then(response => newPage(response.data.results))
  }
  return (
    <>
      <div className='home-page'>
        {page.map(p => <Films page={p} setMoviePage={setMoviePage} key={p.id} />)}
      </div>
      <button className='show-more-btn'
        onClick={showMore}>show more
      </button>
    </>

  )
}

export default HomePage