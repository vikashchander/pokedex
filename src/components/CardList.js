import React from "react";
import CardPrev from "./CardPrev";

class CardList extends React.Component {
  render() {
    
    return (
      <div className="card-list">
        {this.props.pokemons.map((pokemon) => {
          return <CardPrev key={pokemon.name} pokemon={pokemon}></CardPrev>;
        })}
      </div>
    );
  }
}

export default CardList;
