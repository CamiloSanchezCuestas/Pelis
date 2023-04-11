//Camilo Sánchez y Juliana Espinel
import React, { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';
import { NavBar } from './NavBar';

function App() {
  
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "4f5f43495afcc67e9553f6c684a82f84";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

  // endpoint para las imagenes
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  // variables de estado
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  //const [selectedMovie, setSelectedMovie] = useState({})
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Loading Movies" });
  const [playing, setPlaying] = useState(false);

  // funcion para realizar la peticion get a la api
  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });

    setMovies(results);
    setMovie(results[0]);
    }
    const searchMovies = (e) => {
      e.preventDefault();
      fetchMovies(searchKey);
    };
  
    useEffect(() => {
      fetchMovies();
    }, []);

    return (
      <React.Fragment>
      <NavBar/>
      <div>
        <h2 className='text-center mt-5 mb-5'>CuevanaPremium</h2>
        <form className='container mb-4' onSubmit={searchMovies}>
            <input type="text" placeholder='search' onChange={(e)=> setSearchKey(e.target.value)} />
            <button className='btn btn-primary'>Buscar</button>
        </form>
        <div className="container mt-3">
          <div className="row">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="col-md-4 mb-3"
              >
                <img
                  src={`${URL_IMAGE + movie.poster_path}`}
                  alt=""
                  height={600}
                  width="100%"
                />
                <h4 className="text-center">{movie.title}</h4>
            </div>
            ))}
        </div>
      </div>
    </div>
    </React.Fragment>
    );
}

export default App;