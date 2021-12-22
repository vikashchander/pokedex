import React from "react";
import { Card, Image } from "semantic-ui-react";

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
        this.setState({data});
      });

  }
  render() {
    return (
      <Card>
        {
          this.state.data.id && 
          <Image
          size='small' rounded
          wrapped ui={false}
          src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${this.state.data.id}.svg`}
          
        />
         }        
        <Card.Content>
          <Card.Header>
            {this.props.pokemon.name[0].toUpperCase() +
              this.props.pokemon.name.slice(1)}
          </Card.Header>
        </Card.Content>
      </Card>
    );
  }
}

export default CardPrev;
