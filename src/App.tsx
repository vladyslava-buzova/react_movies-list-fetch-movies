import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { FindMovie } from './components/FindMovie';
import { Movie } from './types/Movie';

export const App = () => {
  const [movies] = useState<Movie[]>([]);
  // console.log(movies)

  const handleCklick = (inputInfo: any) => {
    // load info
    // if movie. incluses 'inputInfo'

  };

  return (
    <div className="page">
      <div className="page-content">
        <MoviesList movies={movies} />
      </div>

      <div className="sidebar">
        <FindMovie
          findMovie={handleCklick}
        />
      </div>
    </div>
  );
};
