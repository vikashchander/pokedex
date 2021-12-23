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
      <div className="card h-100 border border-primary">
        <img
          src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${this.state.data.id}.svg`}
          className="card-img-top"
          alt="Hollywood Sign on The Hill"
        />
        <div className="card-body">
          <h5 className="card-title">
            {this.props.pokemon.name[0].toUpperCase() +
              this.props.pokemon.name.slice(1)}
          </h5>
          <p className="card-text">{"#" + this.state.data.id}</p>
        </div>
      </div>
    );
  }
}

export default CardPrev;
