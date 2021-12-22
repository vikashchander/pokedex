import { Card,Image } from 'semantic-ui-react'

const CardPrev = (props) => {
  return (
  <Card>
    <Image src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${25}.svg`} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.pokemon.name[0].toUpperCase()+props.pokemon.name.slice(1)}</Card.Header>
      </Card.Content>
  </Card>
)
  }

export default CardPrev;