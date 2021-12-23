import React from "react";

class CardPrev extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: this.props.pokemon.url,
      data: {},
    };
  }

  componentDidMount() {
    fetch(this.state.urls)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data });
      });
  }
  render() {
    return (
      <div class="card h-100">
        <img
          src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${this.state.data.id}.svg`}
          class="card-img-top"
          alt="Hollywood Sign on The Hill"
        />
        <div class="card-body">
          <h5 class="card-title">
            {this.props.pokemon.name[0].toUpperCase() +
              this.props.pokemon.name.slice(1)}
          </h5>
          <p class="card-text">{"#" + this.state.data.id}</p>
        </div>
      </div>
    );
  }
}

export default CardPrev;
