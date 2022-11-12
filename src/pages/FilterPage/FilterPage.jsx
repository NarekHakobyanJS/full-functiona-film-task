import React from 'react';
import FilmsFilter from '../../components/Films/FilmsFilter';
import "./FilterPage.scss";
import axios from "axios";
import { API_KEY } from '../../api/api';


function FilterPage({ filter, setMoviePage, newPage, pageNumber }) {
  const showMore = () => {
    axios.get(` https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=${pageNumber}`)
      .then(response => newPage(response.data.results))
  }

  return (
    <>
      <div className='filter-page'>
        {filter.map(filter => <FilmsFilter filter={filter} setMoviePage={setMoviePage} key={filter.id} />)}
      </div>
      <button className='show-more-btn'
        onClick={showMore}>show more
      </button>
    </>
  )
}

export default FilterPage