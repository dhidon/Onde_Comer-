import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default useResults = () => { //função que faz a requisição
    const [results, setResults] = useState([]) //results é a variável que guarda nosso array de objetos contendo os dados dos restaurantes
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm, locationToSearch) => {
        console.log('hi there!')
        try {
            const response = await yelp.get('/search', { //yelp.get faz a requisição. O primeiro argumento é o endpoint, o segundo é um objeto com as configurações da requisição
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: locationToSearch
                }
            })
            setResults(response.data.businesses) //procura os dados dentro do array businesses e salva no estado
        } catch (e) {
            setErrorMessage('Algo deu errado')
        }
    }
    
    useEffect(() => { //roda apenas uma vez uma pesquisa por 'pasta' 
        searchApi('pasta', 'São Paulo')
    }, [])

    return [searchApi, results, errorMessage] //retorna um array com as funções e estados que serão utilizados
}

