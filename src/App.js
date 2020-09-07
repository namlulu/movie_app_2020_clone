import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false })
    //하나는 setstate: 하나는 axio에서 온 데이터 무비
  }

  componentDidMount(){
    this.getMovies();    
  };

  render(){
    const { isLoading, movies } = this.state;
    return (
    <section className="container">
        {isLoading ? (
            <div className="loader">
                <span className="loader__text">Loading...</span>
            </div>
        ) : (
            <div className="movies">
              {movies.map(movie => (
                <Movie 
                    key={movie.id}
                    id={movie.year} 
                    year={movie.year} 
                    title={movie.title} 
                    summary={movie.summary} 
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                />
            ))}
            </div>
        )}
    </section>
    );
  };
 
}

export default App;