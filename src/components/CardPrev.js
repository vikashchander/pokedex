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
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  }
  handleAdd = () => {
    this.props.parentCallback(this.state.types);
  };
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
      <span key={data.slot} className="w-3 h5 badge p-1 m-2 rounded-pill bg-primary">
        {data.type.name}
      </span>
    ));

    const statsItems = this.state.stats.map((data) => (
      <div key={data.stat.name}>
        <div className="m-2 p-3 row">
          <p>{data.stat.name.toUpperCase()}</p>
          {/* <p>{data.base_stat}</p> */}
          <div className="progress">
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{ width: "50%" }}
              aria-valuenow={data.base_stat}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    ));
    return (
      <div
        onClick={this.handleClick}
        className="card h-100 border border-primary"
        ref={this.elementRef}
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
