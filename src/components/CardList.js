import CardPrev from "./CardPrev";

  export const CardList = props => (
    <div className='card-list'>
        {props.pokemons.map(pokemon =>(
        <CardPrev key={pokemon.name} pokemon={pokemon}></CardPrev>
        ))}
    </div>
);

