import React from "react";
import Protypes from 'prop-types'
import './Movie.css';
import { Link } from 'react-router-dom';

function Movie({ title, year, summary, poster, genres }) {
    return (
        <div className="movie">
            {/* <Link to={{ pathname: '/movie-detail', state: { year, title, summary, poster, genres } }}> */}
            <Link to="/movie-detail" state={title}>
                <img src={poster} alt={title} title={title}></img>
                <div className="movie_data">
                    <h3 className="movie_title" style={{ backgroundColor: 'red' }}>{title}</h3>
                    <h5 className="movie_year">{year}</h5>

                    <p className="movie_summary" style={{ backgroundColor: 'white' }}>
                        {/* 생략표시로 ... 을 추가  */}
                        {summary.slice(0, 180)}...</p>
                    <ul className="movie_genres">
                        {
                            genres.map((genre, index) => {
                                return <li key={index} className="movie_genre">{genre}</li>;
                            })
                        }
                    </ul>
                </div>
            </Link>
        </div>
    );
}

Movie.protoTypes = {
    year: Protypes.number.isRequired,
    title: Protypes.string.isRequired,
    summary: Protypes.string.isRequired,
    poster: Protypes.string.isRequired,
    genres: Protypes.arrayOf(Protypes.string).isRequired,
};

export default Movie;