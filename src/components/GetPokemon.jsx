
import React,{ useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"



const GetPokemon = () => {
    

    const [Pokenom, setPokemon] = useState([])
    const [Limite, setLimite] = useState(10)

    const carregarMais = () => {
        setLimite(Limite + 10)
    }

    const url = `https://pokeapi.co/api/v2/pokemon/?&limit=${Limite}`
   

    useEffect(() => {
        fetch(url).then(response => response.json()).then(data => {

            setPokemon(data.results)

        })

    }, [Limite])



    return (
        <div>
            <h1> Escolha seu Pokemon</h1>
          
            {
                Pokenom.map((poke, index) => {
                    return (
                        <div key={index} >

                            <Link to={`/details/${poke.name}`}>
                                <p>{poke.name}</p>
                            </Link>
                        </div>
                    )
                })
            }
            <button onClick={carregarMais}> Carregar mais Pokemon </button>



        </div>

    )

}
export { GetPokemon }