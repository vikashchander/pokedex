import React, { Component } from "react";
import CardList from "./components/CardList";
import { SearchBox } from "./components/SearchBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      pokemons: [],
      search: "",
      next: "",
      prev: "",
      url: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20",
    };

    this.handleClickPrev = this.handleClickPrev.bind(this);
    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleFetch = this.handleFetch.bind(this);
  }

  handleClickNext() {
    this.setState({ url: this.state.next });
    this.handleFetch();
  }

  handleClickPrev() {
    this.setState({ url: this.state.prev });
    console.log("1");
    this.handleFetch();
  }

  componentDidMount() {
    this.handleFetch();
  }

  handleFetch = () => {
    fetch(this.state.url)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          pokemons: data.results,
          next: data.next,
          prev: data.previous,
        })
      );
  };

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { pokemons, search } = this.state;
    const fileteredPokemons = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );

    let checker1;
    let checker2;
    if (this.state.prev !== null) {
      checker1 = (
        <button
          onClick={this.handleClickPrev}
          type="button"
          className="btn btn-primary m-1"
          type="button"
        >
          Prev
        </button>
      );
    } else {
      checker1 = (
        <button
          onClick={this.handleClickPrev}
          type="button"
          className="btn btn-primary m-1"
          type="button"
          disabled
        >
          Prev
        </button>
      );
    }

    if (this.state.next !== null) {
      checker2 = (
        <button
          onClick={this.handleClickNext}
          type="button"
          className="btn btn-primary m-1"
          type="button"
        >
          Next
        </button>
      );
    } else {
      checker2 = (
        <button
          onClick={this.handleClickNext}
          type="button"
          className="btn btn-primary m-1"
          type="button"
          disabled
        >
          Next
        </button>
      );
    }
    return (
      <div className="container">
        <div className="">
          <h1>Pokedox</h1>
          <SearchBox placeholder="Search" handleChange={this.handleChange} />
        </div>

        <div className="container-lg">
          <CardList pokemons={fileteredPokemons}></CardList>
        </div>

        <div className="container">
          <div className="row p-2">
            <div className="col-md-auto ">{checker1}</div>
            <div className="col-md-auto">{checker2}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
