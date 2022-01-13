import React from "react";
import PokemonDetails from "./PokemonDetails";
import { MDBModal, MDBModalBody, MDBModalHeader } from "mdbreact";
class CardPrev extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: this.props.pokemon.url,
      data: {},
      types: [],
      id: null,
      modal: false,
      stats: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  componentDidMount() {
    fetch(this.state.urls)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data });
        this.setState({ types: data.types });
        this.setState({ id: data.id });
        this.setState({ stats: data.stats });
      });
  }
  render() {
    const title = <p className="card-text">{"# " + this.state.id}</p>;
    const listItems = this.state.types.map((data) => (
      <p key={data.slot}>{data.type.name}</p>
    ));

    const statsItems = this.state.stats.map((data) => (
      <div key={data.stat.name}>
        <p>{data.stat.name.toUpperCase()}</p>
        <p>{data.base_stat}</p>
      </div>
    ));
    return (
      <div
        onClick={this.handleClick}
        className="card h-100 border border-primary"
      >
        <MDBModal isOpen={this.state.modal}>
          <MDBModalHeader>
            {this.props.pokemon.name[0].toUpperCase() +
              this.props.pokemon.name.slice(1) +
              " Stats"}
          </MDBModalHeader>
          {statsItems}
        </MDBModal>
        {this.state.id !== null && (
          <img
            src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${this.state.data.id}.svg`.replace(
              / /g,
              ""
            )}
            className="card-img-top"
            alt="Hollywood Sign on The Hill"
          />
        )}

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
