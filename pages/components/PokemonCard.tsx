import styles from './SelectedCard.module.css'

export function PokemonCard({ pokemon }) {
  return (
    <div>
      <div className={styles.presentation}>
        <img src={pokemon.img} />
        <div>{pokemon.name} </div>
        <div>{pokemon.type.map(type => (<span key={type}> {type} </span>))} </div>
      </div>

      <div className={styles.details}>
        <div>Height: {pokemon.height} </div>
        <div>Height: {pokemon.weight} </div>
        <div>Weaknesses: {pokemon.weaknesses.join(', ')} </div>
      </div>
    </div>
  );
}
