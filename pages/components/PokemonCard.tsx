import styles from './PokemonCard.module.css'

export function PokemonCard({ pokemon }) {
  return (
    <div className={styles.info}>
    <div className={styles.innerinfo}>
      <img src={pokemon.img} />
      <div className={styles.presentation}>
        <div className={[styles.title, styles.name].join(' ')}>{pokemon.name} </div>
        <div>{pokemon.type.map(type => (<span className={styles.type} key={type}> {type} </span>))} </div>
        <div className={styles.details}>
          <div><span className={styles.title}>Height:</span> {pokemon.height} </div>
          <div><span className={styles.title}>Weight: {pokemon.weight}</span> </div>
          <div><span className={styles.title}>Weaknesses:</span> {pokemon.weaknesses.join(', ')} </div>
        </div>
      </div>
    </div>
    </div>
  );
}
