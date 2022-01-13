import React from "react";
import CardPrev from "./CardPrev";

class CardList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.pokemons.map((pokemon) => {
            return (
              <div className="col-md-3 p-1" key={pokemon.name}>
                <CardPrev key={pokemon.name}  pokemon={pokemon} parentCallback = {this.props.parentCallback}></CardPrev>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CardList;
