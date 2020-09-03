import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component{
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
    return <div>{isLoading ? "Loading..." : movies.map(movie => {
      console.log(movie);
      return <Movie 
        id={movie.year} 
        year={movie.year} 
        title={movie.title} 
        summary={movie.summary} 
        poster={movie.medium_cover_image}/>
    })}
  </div>;
  }
  
}

export default App;