import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import "./Details.css"




const Details = () => {

    const { name } = useParams()

    const [Pokemon, setPokemon] = useState({})

    const url = `https://pokeapi.co/api/v2/pokemon/${name}`

    useEffect(() => {
        fetch(url).then(response => response.json()).then(data => {



            console.log(data)

            const Pokemon = {
                nome: data.name,
                habilidades: data.abilities[0].ability.name,
                imagem: data.sprites.front_shiny,
                experience: data.base_experience
            }

            setPokemon(Pokemon)

            console.log(Pokemon.experience)


        })


    }, [name])



    return (
    
    <>
    

        <div className="container">

            <div className="banner">
                <img src={Pokemon.imagem} alt="" />
            </div>
            <div className="infor">
                <h2>{Pokemon.nome}</h2>
                <h3>{`Habilidade : ${Pokemon.habilidades}`}</h3>
                <h2>{`Experiência : ${Pokemon.experience}`}</h2>
                

            </div>
         


        </div>
        <Link to={"/"}>  <button >Go back</button></Link>
        

        </>


    )
}

export { Details }