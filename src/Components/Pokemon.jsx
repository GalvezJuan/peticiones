import { useEffect, useState } from "react"

export const Pokemon = ({ pok }) => {

    const [pokemon, setPokemon] = useState([])


    const getPokemon = async () => {
        let response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pok)
        let data = await response.json()
        setPokemon(data)


    }

    useEffect(() => {
        if (pok !== ""){
            getPokemon()
            
        }
    }, [pok]
    )


    return <>
        <h1>¿Quién es ese Pokémon?: {pokemon.name}</h1>
        <img src={pokemon.sprites.front_default} alt="" />

    </>
}