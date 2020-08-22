import React from 'react';
import Proptypes from 'prop-types';

const foodILike = [
  {
    id:1,
    name: "kimchi",  
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.b1--UnlhGFKh5BddbDxkCAHaF2%26pid%3DApi&f=1",
  },
  { 
    id:2,
    name: "samgyeopal",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Mz1Q9GnOjEBnQgBQ4c6plwHaEK%26pid%3DApi&f=1",
    rating: 4.9
  },
  {
    id:3,
    name: "bibimbap",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.zLqvZs3nUjLfrZIvnqGVrAHaEK%26pid%3DApi&f=1",
    rating: 4.8
  },
  {
    id:4,
    name: "samgyeopal",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.wt9xPWPsBnMTOW1b0zaDWwHaEK%26pid%3DApi&f=1",
    rating: 4.7
  }
]

Food.propTypes = {
  name: Proptypes.string.isRequired,
  picture: Proptypes.string.isRequired,
  rating: Proptypes.number
}


function Food({name, picture, rating}) {
  return (<div>
    <h1>{name}</h1>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>
  );

}


function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food 
          key={dish.id} 
          name={dish.name} 
          picture={dish.image} 
          rating={dish.rating}/>
      ))}
    </div>
    
  );
}

export default App;
