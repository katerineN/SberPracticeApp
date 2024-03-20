import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = 'a1785353';
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?s=movie&apikey=${apiKey}`
        );
        console.log('Movies fetched successfully:', response.data);
        if (response.data.Response === 'True') {
          setMovies(response.data.Search);
        }
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch movies:', error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, [apiKey]);

  if (loading) {
    return (
      <div className="container" style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="container" style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>No movies found.</h2>
      </div>
    );
  }

  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <h2 className="mb-4">Фильмы</h2>
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-4 mb-4" key={movie.imdbID}>
            <div className="card h-100">
              {movie.Poster !== 'N/A' && (
                <img
                  src={movie.Poster}
                  className="card-img-top"
                  alt={movie.Title}
                  style={{ height: '400px', objectFit: 'cover' }}
                />
              )}
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: '1.5rem' }}>
                  {movie.Title}
                </h5>
                <p className="card-text" style={{ fontSize: '1.2rem' }}>
                  Год: {movie.Year}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
