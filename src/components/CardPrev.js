import React from "react";

class CardPrev extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: this.props.pokemon.url,
      data: {},
      types: [],
      id: null,
    };
  }

  componentDidMount() {
    fetch(this.state.urls)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data });
        this.setState({ types: data.types });
        this.setState({ id: data.id });
      });
  }
  render() {
    const title = <p className="card-text">{"# " + this.state.id}</p>;
    const listItems = this.state.types.map((data) => (
      <p key={data.slot}>{data.type.name}</p>
    ));
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
          {title}
          {listItems}
        </div>
      </div>
    );
  }
}

export default CardPrev;
