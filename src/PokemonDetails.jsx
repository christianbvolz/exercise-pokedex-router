import React from "react";
import pokemons from "./data";

class PokemonDetails extends React.Component {
  render() {
    const {match: { params: { id } } } = this.props;
    const pokemon = pokemons.find((pokemon) => pokemon.id === parseFloat(id));
    const {
      name,
      type,
      averageWeight: { value, measurementUnit },
      image,
      summary,
      foundAt,
      moreInfo,
    } = pokemon;

    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: {`${value} ${measurementUnit}`}
          </p>
          <p>Summary: {summary}</p>
        </div>
        <div>
          <img src={image} alt={`${name} sprite`} />
          <a href={moreInfo} target="_blank" rel="noopener noreferrer">More info</a>
        </div>   
        <div>
        <p>Location:</p>
          {foundAt.map((location) => (
            <div key={location.location}>
              <p> {location.location} </p>
              <img src={location.map} alt={location.location}/>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PokemonDetails;
