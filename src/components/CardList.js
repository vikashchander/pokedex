import React from "react";
import CardPrev from "./CardPrev";

class CardList extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.pokemons.map((pokemon) => {
            return (
              <div className="col-lg p-1">
                <CardPrev key={pokemon.name} pokemon={pokemon}></CardPrev>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CardList;
