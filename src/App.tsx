import React, { FC } from 'react';
import { Movie } from './Movie';
import './App.css';
import MovieBox from './MovieBox';
import { movies } from './movies';

if(!localStorage.getItem('watched')) {
    localStorage.setItem('watched', '[]')
}

const GenMovie = () => {
    const watchedMovies = JSON.parse(localStorage.getItem('watched')  || '[]');

    if(watchedMovies.length === movies.length) {
        return {
            name: "You have watched every movie on our list!",
            date: new Date('1111-2-3')
        };
    }

    var m = movies[Math.floor(Math.random() * movies.length)];
    
    while(CheckMovie(m) === false) {
        m = movies[Math.floor(Math.random() * movies.length)]
    }

    return m;
}

const CheckMovie = (m:Movie) => {
    const watchedMovies = JSON.parse(localStorage.getItem('watched')  || '[]');
    
    for (let i = 0; i < watchedMovies.length; i++) {
        const movie = watchedMovies[i];
        
        if(m.name === movie) return false;
    }

    return true;
}

const App:FC = () => {
    var movie: Movie = GenMovie();

    return (
      <div className='app'>
          <MovieBox 
          name={movie.name} 
          date={movie.date} />
      </div>
    );
}

export default App;