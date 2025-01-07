import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const ResultsDetail = ({result}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: result.image_url}}/> 
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Estrelas, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 15
    },
    image: {
        width: 250,
        borderRadius: 4,
        height: 120,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
    }
})

export default ResultsDetail 