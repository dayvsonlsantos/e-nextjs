import styles from '../styles/Home.module.css'

import Image from 'next/image'

import Card from '../components/Card'

export async function getStaticProps() {

  //Tentar usar o fallback para trazer todos os pokemons (02:20min aula 22)
  const maxPokemons = 251
  const api = `https://pokeapi.co/api/v2/pokemon/`

  const res = await fetch(`${api}/?limit=${maxPokemons}`)

  const data = await res.json()

  // add pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1 //+1 pois os array inicia em 0
  })

  return {
    props: {
      pokemons: data.results,
    },
  }

}

export default function Home({ pokemons }) {
  return (
    <>
      <section className={styles.titleContainer}>
        <h1 className={styles.title}>Poke<span>Next</span></h1>
        <Image src="/images/pokeball.png" width="50" height="50" alt="PokeNext" />
      </section>
      <section className={styles.pokemonContainer}>
        {pokemons.map((pokemon) => ( // () e não {}, pois estamos retornando um objeto. JSX é um objeto
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </section>
    </>
  )
}
