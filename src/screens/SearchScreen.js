import React, { useState } from "react";
import { Text, StyleSheet, ScrollView, TouchableOpacity, Alert, View } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import LocationSearchBar from "../components/LocationSreachBar";
import ResultsList from "../components/ResultsList";


const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()
    const [location, setLocation] = useState('')

    const filterResultsByPrice = (price) => {
            return results.filter( results => {
                return results.price === price
            })
        }
    
    console.log(results)

    return (
        <View style={{backgroundColor: '#B0C4DE'}}>
            <SearchBar 
                term={term}
                onTermChange={setTerm}
            />

            <LocationSearchBar 
                location={location}
                onLocationChange={setLocation}
            />

            <TouchableOpacity style={styles.search} onPress={() => {
                if (!term || !location) {
                    Alert.alert('Erro', 'Preencha todos os campos')
                    return
                }
                searchApi(term, location)
            }}>
                <Text style={styles.text}>Buscar</Text>
            </TouchableOpacity>

            {errorMessage ? <Text>{errorMessage}</Text> : null}

            <ScrollView>
                <ResultsList results={filterResultsByPrice('$')} title='No Precinho' />
                <ResultsList results={filterResultsByPrice('$$')} title='Justo' />
                <ResultsList results={filterResultsByPrice('$$$')} title='Tá ficando caro' />
                <ResultsList results={filterResultsByPrice('$$$$')} title='Ganhou na Mega, foi?' />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    search: {
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 15,
        backgroundColor: '#87CEFA'
    },
    text: {
        fontSize: 18,
        alignSelf: 'center',
        fontWeight: 'bold'
    }
})

export default SearchScreen